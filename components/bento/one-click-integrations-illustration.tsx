"use client"

import React, { useEffect, useRef, useMemo } from "react"

interface ThemeVars {
  [key: string]: string
}

export default function OneClickIntegrationsIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Get theme variables with useMemo to avoid dependency issues
  const themeVars: ThemeVars = useMemo(() => ({
    "--oci-border-color": "rgba(255, 255, 255, 0.1)",
    "--oci-gradient-light-gray-start": "rgba(255, 255, 255, 0.05)",
    "--oci-gradient-light-gray-end": "rgba(255, 255, 255, 0.02)",
    "--oci-shadow-color": "rgba(0, 0, 0, 0.1)",
    "--oci-foreground-color": "rgba(255, 255, 255, 0.8)"
  }), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 400
    canvas.height = 300

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw integration boxes
    const boxes = [
      { x: 50, y: 50, width: 80, height: 60, label: "Figma" },
      { x: 150, y: 50, width: 80, height: 60, label: "GitHub" },
      { x: 250, y: 50, width: 80, height: 60, label: "Slack" },
      { x: 100, y: 150, width: 80, height: 60, label: "Notion" },
      { x: 200, y: 150, width: 80, height: 60, label: "Linear" },
    ]

    boxes.forEach((box) => {
      // Box style
      const boxStyle = {
        border: `1px ${themeVars["--oci-border-color"]} solid`,
        borderRadius: "8px",
        background: `linear-gradient(180deg, ${themeVars["--oci-gradient-light-gray-start"]} 0%, ${themeVars["--oci-gradient-light-gray-end"]} 100%)`,
        boxShadow: `0px 1px 2px ${themeVars["--oci-shadow-color"]}`
      }

      // Draw box
      ctx.fillStyle = themeVars["--oci-gradient-light-gray-start"]
      ctx.strokeStyle = themeVars["--oci-border-color"]
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(box.x, box.y, box.width, box.height, 8)
      ctx.fill()
      ctx.stroke()

      // Draw label
      ctx.fillStyle = themeVars["--oci-foreground-color"]
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(box.label, box.x + box.width / 2, box.y + box.height / 2 + 4)
    })

    // Draw connection lines
    ctx.strokeStyle = themeVars["--oci-foreground-color"]
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])

    // Connect boxes in a network pattern
    ctx.beginPath()
    ctx.moveTo(90, 80)
    ctx.lineTo(150, 80)
    ctx.moveTo(230, 80)
    ctx.lineTo(290, 80)
    ctx.moveTo(140, 110)
    ctx.lineTo(200, 110)
    ctx.stroke()

    // Draw central hub
    ctx.fillStyle = themeVars["--oci-foreground-color"]
    ctx.beginPath()
    ctx.arc(200, 150, 20, 0, 2 * Math.PI)
    ctx.fill()

    // Add glow effect
    ctx.shadowColor = themeVars["--oci-foreground-color"]
    ctx.shadowBlur = 10
    ctx.beginPath()
    ctx.arc(200, 150, 15, 0, 2 * Math.PI)
    ctx.fill()
    ctx.shadowBlur = 0

  }, [themeVars])

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: `radial-gradient(
            ellipse at center,
            ${themeVars["--oci-foreground-color"]}00 0%,
            ${themeVars["--oci-foreground-color"]}F5 15%,
            ${themeVars["--oci-foreground-color"]}66 49%,
            ${themeVars["--oci-foreground-color"]}F5 87%,
            ${themeVars["--oci-foreground-color"]}00 100%)`,
        }}
      />
    </div>
  )
}
