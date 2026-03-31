import { forwardRef, type ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      icon,
      iconPosition = "right",
      children,
      className = "",
      as = "button",
      href,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 cursor-pointer text-sm tracking-[-0.01em]";
    const variantClasses = {
      primary:
        "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 active:scale-[0.98] rounded-full px-6 py-3",
      secondary:
        "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/30 active:scale-[0.98] rounded-full px-6 py-3",
      ghost:
        "bg-transparent text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.98] rounded-full px-4 py-2",
    };
    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
      </>
    );

    if (as === "a" && href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
