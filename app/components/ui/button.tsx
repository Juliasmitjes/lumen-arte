import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"


const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-business ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary-warm transition-all duration-300 hover:shadow-warm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary text-primary bg-white/30 backdrop-blur-md shadow-sm hover:bg-primary/50 hover:text-primary-foreground hover:shadow-soft transition-all duration-300",
        outlineref:
          "border border-accent text-accent bg-white/30 backdrop-blur-md shadow-sm hover:bg-accent/50 hover:text-accent-foreground hover:shadow-soft transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-warm transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-highlight-foreground shadow-warm hover:shadow-deep border border-primary-light/30          backdrop-blur-sm transition-all duration-500 hover:scale-105",
        heroref: "bg-accent text-highlight-foreground shadow-warm hover:shadow-deep border border-accent-light/30 backdrop-blur-sm transition-all duration-500 hover:scale-105",
        organic: "bg-accent text-accent-foreground shadow-soft hover:bg-accent-warm transition-all duration-400 hover:shadow-warm border border-accent-light/50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-10 rounded-md px-4",
        lg: "h-11 rounded-md px-8 ",
        icon: "h-10 w-10",
        hero: "h-12 px-6 text-lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }