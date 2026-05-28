import { NavbarMinimal } from '@/components/navbar-minimal'
import { HeroNew } from '@/components/hero-new'
import { FeaturesBento } from '@/components/features-bento'
import { WorkflowSteps } from '@/components/workflow-steps'
import { PricingNew } from '@/components/pricing-new'
import { FooterCTA } from '@/components/footer-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarMinimal />
      <HeroNew />
      <FeaturesBento />
      <WorkflowSteps />
      <PricingNew />
      <FooterCTA />
    </main>
  )
}
