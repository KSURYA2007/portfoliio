import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { playSound } from '../utils/audio'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_en4ueqg'
const EMAILJS_TEMPLATE_ID = 'template_l1l3wmq'
const EMAILJS_PUBLIC_KEY = '5wQ_5m2ipo7kjiTyq'

export default function ContactSection() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('')

  const validate = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.'
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Project / Subject is required.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for field on type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    playSound('blip')

    if (!validate()) {
      setStatus('error')
      setStatusMessage('Please fix the errors highlighted above.')
      return
    }

    setStatus('loading')
    setStatusMessage('Transmitting message via EmailJS...')

    try {
      const templateParams = {
        name: formData.fullName,
        from_name: formData.fullName,
        fullName: formData.fullName,
        email: formData.email,
        reply_to: formData.email,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      playSound('success')
      setStatus('success')
      setStatusMessage(
        `Transmission successful! Thank you, ${formData.fullName}. Your message has been dispatched.`
      )
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      })
      setErrors({})
    } catch (error) {
      console.error('EmailJS Send Error:', error)
      playSound('blip')
      setStatus('error')
      const errorDetail = error?.text || error?.message || 'Connection or service configuration error'
      setStatusMessage(
        `Failed to send transmission: ${errorDetail}. Service ID: ${EMAILJS_SERVICE_ID}.`
      )
    }
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    })
    setErrors({})
    setStatus('idle')
    setStatusMessage('')
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 lg:px-14 border-t border-[#222222]">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#222222] pb-6">
          <div className="space-y-2">
            <div className="font-pixel text-[11px] text-[#C5FF00] tracking-widest uppercase">
              // 05. INITIALIZE TRANSMISSION
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F1F1F1]">
              Get In Touch
            </h2>
          </div>
          <div className="font-pixel-ui text-xs text-[#8E8E93]">
            PROTOCOL: DIRECT_MESSAGE
          </div>
        </div>

        {/* Contact Container */}
        <div className="bg-[#161616] border border-[#2A2A2A] p-6 sm:p-10 shadow-[6px_6px_0px_0px_#262626]">
          
          <div className="pb-6 mb-6 border-b border-[#242424] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="font-pixel text-[11px] text-[#FFC83D]">CONTACT_TERMINAL.EXE</span>
            <div className="flex items-center gap-3 text-xs font-pixel-ui">
              <a
                href="https://github.com/KSURYA2007"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('blip')}
                className="text-[#8E8E93] hover:text-[#C5FF00] transition-colors"
              >
                GITHUB ↗
              </a>
              <span className="text-[#333333]">|</span>
              <a
                href="https://www.linkedin.com/in/surya-kanagaraj-4b282931a/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('blip')}
                className="text-[#8E8E93] hover:text-[#FFC83D] transition-colors"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block font-pixel text-xs text-[#F1F1F1]">
                  Full Name <span className="text-[#C5FF00]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={status === 'loading'}
                  className={`w-full bg-[#111111] border ${
                    errors.fullName ? 'border-red-500' : 'border-[#333333] focus:border-[#C5FF00]'
                  } px-4 py-3 text-sm text-[#F1F1F1] placeholder-[#555555] font-sans outline-none transition-colors`}
                />
                {errors.fullName && (
                  <p className="font-pixel-ui text-[11px] text-red-400">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="block font-pixel text-xs text-[#F1F1F1]">
                  Email Address <span className="text-[#C5FF00]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  disabled={status === 'loading'}
                  className={`w-full bg-[#111111] border ${
                    errors.email ? 'border-red-500' : 'border-[#333333] focus:border-[#C5FF00]'
                  } px-4 py-3 text-sm text-[#F1F1F1] placeholder-[#555555] font-sans outline-none transition-colors`}
                />
                {errors.email && (
                  <p className="font-pixel-ui text-[11px] text-red-400">{errors.email}</p>
                )}
              </div>

            </div>

            {/* Project / Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block font-pixel text-xs text-[#F1F1F1]">
                Project / Subject <span className="text-[#C5FF00]">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Freelance Project / Collaboration / Product Query"
                disabled={status === 'loading'}
                className={`w-full bg-[#111111] border ${
                  errors.subject ? 'border-red-500' : 'border-[#333333] focus:border-[#C5FF00]'
                } px-4 py-3 text-sm text-[#F1F1F1] placeholder-[#555555] font-sans outline-none transition-colors`}
              />
              {errors.subject && (
                <p className="font-pixel-ui text-[11px] text-red-400">{errors.subject}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block font-pixel text-xs text-[#F1F1F1]">
                Message <span className="text-[#C5FF00]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                disabled={status === 'loading'}
                className={`w-full bg-[#111111] border ${
                  errors.message ? 'border-red-500' : 'border-[#333333] focus:border-[#C5FF00]'
                } px-4 py-3 text-sm text-[#F1F1F1] placeholder-[#555555] font-sans outline-none transition-colors resize-y`}
              />
              {errors.message && (
                <p className="font-pixel-ui text-[11px] text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Feedback Messages */}
            {statusMessage && (
              <div
                className={`p-4 border font-pixel-ui text-xs ${
                  status === 'success'
                    ? 'bg-[#152410] border-[#C5FF00] text-[#C5FF00]'
                    : status === 'error'
                    ? 'bg-[#291212] border-red-500 text-red-400'
                    : 'bg-[#1C1C1C] border-[#333333] text-[#8E8E93]'
                }`}
              >
                {statusMessage}
              </div>
            )}

            {/* Submit & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto bg-[#C5FF00] hover:bg-[#b0e600] disabled:bg-[#333333] disabled:text-[#777777] text-black font-pixel text-xs px-8 py-4 tracking-wider transition-all shadow-[4px_4px_0px_0px_#FFFFFF] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
              >
                {status === 'loading' ? 'VALIDATING...' : 'Send Message ▶'}
              </button>

              {status === 'success' && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-pixel text-[11px] text-[#8E8E93] hover:text-[#FFFFFF] underline"
                >
                  Write another message
                </button>
              )}
            </div>

          </form>

        </div>

      </div>
    </section>
  )
}

