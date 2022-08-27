import React from 'react'
import Card from './../../components/common/movie card/Card'

function HeroSection() {
  return (
    <section style={{ backgroundColor: '#171717' }}>
      <div>HeroSection</div>

      {/* <Card /> */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default HeroSection
