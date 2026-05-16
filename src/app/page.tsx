'use client'

import { useState } from 'react'

const features = [
  {
    icon: '❄️',
    title: 'Ultra Refrescante',
    description: 'Una explosión de frescura en cada sorbo. Perfecto para combatir el calor en cualquier momento del día.',
    color: 'from-cyan-400 to-blue-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    icon: '🍋',
    title: 'Sabores Naturales',
    description: 'Elaborado con extractos de frutas naturales. Sin colorantes artificiales, solo el sabor que la naturaleza ofrece.',
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
  },
  {
    icon: '⚡',
    title: 'Energía Instantánea',
    description: 'Vitaminas B6 y B12 para darte el impulso que necesitas. Activa tu día con cada lata.',
    color: 'from-purple-400 to-pink-500',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    icon: '🌿',
    title: 'Sin Azúcar Añadida',
    description: 'Disfruta sin culpa. Nuestra fórmula especial te da todo el sabor con cero azúcar añadida.',
    color: 'from-green-400 to-teal-500',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
]

const flavors = [
  { name: 'Limón & Menta', emoji: '🍋', color: 'bg-yellow-400', textColor: 'text-yellow-900' },
  { name: 'Frutos Rojos', emoji: '🍓', color: 'bg-red-400', textColor: 'text-red-900' },
  { name: 'Maracuyá Tropical', emoji: '🥭', color: 'bg-orange-400', textColor: 'text-orange-900' },
  { name: 'Menta Ártica', emoji: '🌿', color: 'bg-teal-400', textColor: 'text-teal-900' },
]

const testimonials = [
  { name: 'Sofía R.', text: '¡FreshBurst es mi refresco favorito del verano! El sabor de limón y menta es increíble.', avatar: '👩', stars: 5 },
  { name: 'Carlos M.', text: 'Por fin un refresco sin azúcar que sabe de verdad. Lo tomo cada mañana antes de entrenar.', avatar: '👨', stars: 5 },
  { name: 'Laura P.', text: 'El maracuyá tropical me transporta directo a la playa. ¡No puedo vivir sin él!', avatar: '🧕', stars: 5 },
]

export default function Home() {
  const [activeFlavor, setActiveFlavor] = useState(0)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  const flavorColors = [
    'from-yellow-300 via-lime-300 to-green-300',
    'from-red-300 via-pink-300 to-rose-300',
    'from-orange-300 via-amber-300 to-yellow-300',
    'from-teal-300 via-cyan-300 to-blue-300',
  ]

  return (
    <main className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥤</span>
            <span className="font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">FreshBurst</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#sabores" className="hover:text-cyan-500 transition-colors">Sabores</a>
            <a href="#beneficios" className="hover:text-cyan-500 transition-colors">Beneficios</a>
            <a href="#opiniones" className="hover:text-cyan-500 transition-colors">Opiniones</a>
          </div>
          <a
            href="#cta"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-5 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Pedir ahora
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${flavorColors[activeFlavor]} transition-all duration-700`} />
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Nuevo sabor disponible
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-md mb-6">
              hola esto es un test
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              FreshBurst combina sabores naturales explosivos con vitaminas esenciales. Refrescante, sin azúcar y lleno de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="bg-white text-gray-900 font-black text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-block"
              >
                🛒 Consíguelo ahora
              </a>
              <a
                href="#beneficios"
                className="bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-full border-2 border-white/50 hover:bg-white/30 transition-all duration-200 inline-block"
              >
                Descubrir más ↓
              </a>
            </div>
            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start mt-12">
              <div className="text-center">
                <div className="text-3xl font-black text-white">4</div>
                <div className="text-sm text-white/80 font-medium">Sabores únicos</div>
              </div>
              <div className="w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-black text-white">0g</div>
                <div className="text-sm text-white/80 font-medium">Azúcar añadida</div>
              </div>
              <div className="w-px bg-white/30" />
              <div className="text-center">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-sm text-white/80 font-medium">Natural</div>
              </div>
            </div>
          </div>

          {/* Can Illustration */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-b ${flavorColors[activeFlavor]} rounded-full blur-2xl opacity-60 scale-110 transition-all duration-700`} />
              {/* Can SVG */}
              <div className="relative animate-[float_3s_ease-in-out_infinite]">
                <svg width="200" height="340" viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Can body */}
                  <rect x="40" y="40" width="120" height="260" rx="30" fill="white" fillOpacity="0.95" />
                  <rect x="40" y="40" width="120" height="260" rx="30" fill="url(#canGrad)" />
                  {/* Top cap */}
                  <ellipse cx="100" cy="40" rx="60" ry="18" fill="white" fillOpacity="0.8" />
                  <ellipse cx="100" cy="40" rx="60" ry="18" fill="url(#capGrad)" />
                  {/* Pull tab */}
                  <ellipse cx="100" cy="28" rx="20" ry="6" fill="#d1d5db" />
                  <rect x="90" y="20" width="20" height="12" rx="4" fill="#9ca3af" />
                  <ellipse cx="100" cy="20" rx="8" ry="4" fill="#d1d5db" />
                  {/* Bottom cap */}
                  <ellipse cx="100" cy="300" rx="60" ry="18" fill="url(#bottomGrad)" />
                  {/* Label area */}
                  <rect x="50" y="100" width="100" height="150" rx="10" fill="white" fillOpacity="0.9" />
                  {/* Brand text area */}
                  <text x="100" y="145" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#1e3a5f">Fresh</text>
                  <text x="100" y="170" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#0891b2">Burst</text>
                  {/* Flavor emoji */}
                  <text x="100" y="215" textAnchor="middle" fontSize="32">{flavors[activeFlavor].emoji}</text>
                  {/* Decorative lines */}
                  <line x1="60" y1="230" x2="140" y2="230" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="100" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#6b7280">Sin azúcar • Natural • 330ml</text>
                  {/* Highlight */}
                  <rect x="48" y="50" width="12" height="200" rx="6" fill="white" fillOpacity="0.4" />
                  <defs>
                    <linearGradient id="canGrad" x1="40" y1="0" x2="160" y2="340" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="bottomGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#6b7280" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#374151" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Bubbles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="absolute top-10 -left-6 w-5 h-5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-2 right-8 w-6 h-6 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
            </div>

            {/* Flavor selector */}
            <div id="sabores" className="mt-8 flex gap-3 flex-wrap justify-center">
              {flavors.map((f, i) => (
                <button
                  key={f.name}
                  onClick={() => setActiveFlavor(i)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                    activeFlavor === i
                      ? 'bg-white text-gray-900 border-white shadow-lg scale-110'
                      : 'bg-white/30 text-white border-white/40 hover:bg-white/50'
                  }`}
                >
                  <span>{f.emoji}</span> {f.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="beneficios" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              ¿Por qué FreshBurst?
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Todo lo que necesitas en
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> una lata</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              No es solo un refresco. Es una experiencia diseñada para darte energía, sabor y bienestar en cada momento.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className={`${f.bg} ${f.border} border-2 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          {/* Nutrition highlights */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '0', unit: 'kcal', label: 'Calorías' },
                { value: '0g', unit: '', label: 'Azúcares' },
                { value: '100%', unit: '', label: 'Natural' },
                { value: '330', unit: 'ml', label: 'Por lata' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-black text-white">
                    {stat.value}<span className="text-cyan-400 text-2xl">{stat.unit}</span>
                  </div>
                  <div className="text-gray-400 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL / PRODUCT SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Cans display */}
            <div className="relative flex justify-center">
              <div className="relative w-72 h-80">
                {/* Background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full scale-110" />
                {/* Multiple cans staggered */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 45}px`,
                      top: `${10 + Math.sin(i) * 20}px`,
                      transform: `rotate(${-15 + i * 10}deg)`,
                      zIndex: i,
                    }}
                  >
                    <svg width="70" height="120" viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="40" y="40" width="120" height="260" rx="30" fill="white" />
                      <rect x="40" y="40" width="120" height="260" rx="30" fill={['#fde68a', '#fca5a5', '#fed7aa', '#99f6e4'][i]} fillOpacity="0.8" />
                      <ellipse cx="100" cy="40" rx="60" ry="18" fill="white" fillOpacity="0.9" />
                      <ellipse cx="100" cy="300" rx="60" ry="18" fill="#374151" fillOpacity="0.6" />
                      <rect x="50" y="100" width="100" height="140" rx="10" fill="white" fillOpacity="0.85" />
                      <text x="100" y="150" textAnchor="middle" fontFamily="Arial Black" fontSize="16" fontWeight="900" fill="#1e3a5f">Fresh</text>
                      <text x="100" y="172" textAnchor="middle" fontFamily="Arial Black" fontSize="16" fontWeight="900" fill="#0891b2">Burst</text>
                      <text x="100" y="205" textAnchor="middle" fontSize="28">{flavors[i].emoji}</text>
                      <rect x="48" y="50" width="10" height="180" rx="5" fill="white" fillOpacity="0.4" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-block bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 text-sm font-bold px-4 py-1 rounded-full mb-6">
                🌟 4 sabores, infinitas ocasiones
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Elige tu favorito y vive la experiencia
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Cada lata de FreshBurst es una aventura de sabor diferente. Desde el refrescante limón y menta hasta el exótico maracuyá tropical, tenemos el sabor perfecto para cada momento.
              </p>
              <div className="space-y-4">
                {flavors.map((f, i) => (
                  <div
                    key={f.name}
                    className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-cyan-200 hover:bg-cyan-50 transition-all duration-200 cursor-pointer"
                    onClick={() => setActiveFlavor(i)}
                  >
                    <div className={`w-12 h-12 ${f.color} rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                      {f.emoji}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{f.name}</div>
                      <div className="text-sm text-gray-500">Sin azúcar • 100% natural • 330ml</div>
                    </div>
                    {activeFlavor === i && (
                      <div className="ml-auto text-cyan-500 font-bold text-sm">Seleccionado ✓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="opiniones" className="py-24 bg-gradient-to-br from-cyan-500 to-blue-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Lo que dicen nuestros fans
            </h2>
            <p className="text-cyan-100 text-lg">Miles de personas ya disfrutan FreshBurst cada día</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">{t.avatar}</div>
                  <div className="font-bold text-white">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 sm:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="text-5xl mb-6">🥤</div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Prueba FreshBurst
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">gratis hoy</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Suscríbete y recibe una muestra gratuita de nuestros 4 sabores. Sin compromisos, solo la mejor experiencia refrescante.
              </p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black px-8 py-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
                  >
                    🎁 Quiero mi muestra
                  </button>
                </form>
              ) : (
                <div className="bg-green-500/20 border border-green-400/40 rounded-2xl p-6 max-w-lg mx-auto">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-green-400 font-bold text-lg">¡Genial! Te enviamos tu muestra gratis en breve.</p>
                  <p className="text-gray-400 text-sm mt-1">Revisa tu email para confirmar tu dirección.</p>
                </div>
              )}
              <p className="text-gray-600 text-xs mt-4">
                Sin spam. Cancelable en cualquier momento. Envío gratuito a toda España.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🥤</span>
                <span className="font-black text-xl text-white">FreshBurst</span>
              </div>
              <p className="text-sm leading-relaxed">
                El refresco que despierta tus sentidos. Sabores naturales, cero azúcar y máxima energía en cada lata.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Sabores</h4>
              <ul className="space-y-2 text-sm">
                {flavors.map((f) => (
                  <li key={f.name} className="hover:text-white transition-colors cursor-pointer">
                    {f.emoji} {f.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Sobre nosotros</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contacto</li>
                <li className="hover:text-white transition-colors cursor-pointer">Política de privacidad</li>
                <li className="hover:text-white transition-colors cursor-pointer">Términos y condiciones</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">© 2025 FreshBurst. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer text-sm">f</span>
              <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer text-sm">ig</span>
              <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer text-sm">tw</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
