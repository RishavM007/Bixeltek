import HeroAnalytics from '@/components/CRO/CROHero'
import HiddenCostMarketing from '@/components/CRO/CROSection1'
import AnalyticsSection1 from '@/components/CRO/CROSection1'
import TrueAnalyticsSection from '@/components/CRO/CROSection2'
import CROFrameworkStacked from '@/components/CRO/CROSection3'
import ToolsGrid from '@/components/CRO/CROSection4'
import CROProcessSection from '@/components/CRO/CROProcess'
import React from 'react'
import OutcomesGrid from '@/components/CRO/CROSection4'
import CROndustries from '@/components/CRO/CROInd'
import CaseStudySnapshot from '@/components/CRO/CROSection5'

export default function page() {
  return (
      <>
          <HeroAnalytics />
          <HiddenCostMarketing />
          <TrueAnalyticsSection />
          <CROFrameworkStacked />
          <CROProcessSection />
          <OutcomesGrid />
          <CROndustries />
          <CaseStudySnapshot />
      </>
  )
}
