"use client";

import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({
    amount
}: { amount: number }) {
  return (
    <div className="w-full">
        <CountUp 
            decimal=","
            prefix="Rp."
            decimals={2}
            duration={1.5}
            end={amount} 
        />
    </div>        
  )
}

export default AnimatedCounter