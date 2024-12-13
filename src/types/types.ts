export interface ButtonProps {
  variant: 'primary' | 'secondary'
  size: 'small' | 'regular'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

export interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export interface HeroProps {
  title: string
  description: string
  image: string
  altText: string
}

export interface FeatureProps {
  tag: string
  title: string
  description: string
  image: string
  altText: string
}

export interface TestimonialProps {
  rating: number
  quote: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

export interface FooterProps {
  socialLinks: Array<{
    platform: string
    url: string
    icon: string
  }>
}

export interface NavbarProps {
  logo: string
  navLinks: Array<{
    text: string
    href: string
  }>
}
export interface ServiceFeatureProps {
  icon: string
  title: string
  description: string
}

export interface ActionButtonProps {
  label: string
  variant: 'primary' | 'secondary'
  icon?: string
  onClick?: () => void
}
