import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const retroButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-75 disabled:pointer-events-none disabled:opacity-50 retro-font",
  {
    variants: {
      variant: {
        default: "win95-button",
        primary: "win95-button bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "win95-button bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "win95-button border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "win95-button bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        retro: "win95-button bg-[hsl(var(--retro-cyan))] text-black hover:bg-[hsl(var(--retro-green))] pixel-font text-xs",
        neon: "win95-button bg-accent text-accent-foreground retro-glow hover:bg-accent/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        xl: "h-12 px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface RetroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof retroButtonVariants> {
  asChild?: boolean
}

const RetroButton = React.forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(retroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
RetroButton.displayName = "RetroButton"

export { RetroButton, retroButtonVariants }