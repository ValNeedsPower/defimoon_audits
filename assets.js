const assets = [
    {
      id: 1,
      logo: '/dashboard/company_logo/algem_logo.svg',
      pageLink:'https://www.algem.io/',
      name: 'Algem',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Algem_SiriusHandler_reAuditReport.pdf',
      },
      ecosystem: {
        name: 'astar',
        icon: '/dashboard/chains/astar_chain.svg',
      },
      category: 'DeFi',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 1,
      },
    },
    {
      id: 2,
      logo: '/dashboard/company_logo/na_logo.svg',
      pageLink: null,
      name: 'Artpad',
      trusted: false,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Artpad_audit.pdf',
      },
      ecosystem: {
        name: 'solana',
        icon: '/dashboard/chains/solana_chain.svg',
      },
      category: 'DeFi',
      issues: {
        high: 1,
        medium: 1,
        low: 1,
        informational: 8,
      },
    },
    {
      id: 3,
      logo: '/dashboard/company_logo/ayoken_logo.svg',
      pageLink:'https://ayoken.com/',
      name: 'Ayoken',
      trusted: false,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Ayoken.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 5,
        medium: 3,
        low: 46,
        informational: 58,
      },
    },
    {
      id: 4,
      logo: '/dashboard/company_logo/babycake_logo.svg',
      pageLink:'https://www.babycake.top/',
      name: 'BabyCake',
      trusted: false,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/BabyCake.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 1,
        low: 0,
        informational: 5,
      },
    },
    {
      id: 5,
      logo: '/dashboard/company_logo/berliner_logo.svg',
      pageLink:'https://www.berliner.vip/',
      name: 'Berliner',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Berliner.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 1,
        informational: 1,
      },
    },
    {
      id: 6,
      logo: '/dashboard/company_logo/cnx_logo.svg',
      pageLink:'https://cnxnetwork.org/',
      name: 'CNX Token',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/CNX_token.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 3,
      },
    },
    {
      id: 7,
      logo: '/dashboard/company_logo/comtech_logo.svg',
      pageLink:'https://comtechgold.com/',
      name: 'Comtech Gold',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Comtech-gold.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 1,
        informational: 7,
      },
    },
    {
      id: 28,
      logo: '/dashboard/company_logo/na_logo.svg',
      pageLink: null,
      name: 'CFP',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/CryptoForPalestine.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 1,
        low: 1,
        informational: 3,
      },
    },
    {
      id: 8,
      logo: '/dashboard/company_logo/dex_logo.svg',
      name: 'DEX finance',
      pageLink: 'https://www.dexfinance.com/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/DEXfinance.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 4,
      },
    },
    {
      id: 9,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'Decentra-List',
      pageLink:'https://twitter.com/DecentraListxyz',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Decentralist.pdf',
      },
      ecosystem: {
        name: 'ethereum',
        icon: '/dashboard/chains/eth_chain.svg',
      },
      category: 'DeFi',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 2,
      },
    },
    {
      id: 10,
      logo: '/dashboard/company_logo/inverse_logo.svg',
      name: 'Inverse Finance',
      pageLink: 'https://www.inverse.finance/',
      trusted: false,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/InverseFinance.pdf',
      },
      ecosystem: {
        name: 'ethereum',
        icon: '/dashboard/chains/eth_chain.svg',
      },
      category: 'DeFi',
      issues: {
        high: 0,
        medium: 1,
        low: 1,
        informational: 3,
      },
    },
    {
      id: 11,
      logo: '/dashboard/company_logo/ledgerFi_logo.svg',
      name: 'LedgerFi',
      pageLink: 'https://ledgerfi.io/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/LedgerFi_reaudit.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 3,
      },
    },
    {
      id: 12,
      logo: '/dashboard/company_logo/marmoset_logo.svg',
      name: 'Marmosettoken',
      pageLink: 'https://marmosettoken.com/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Marmosettoken.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 3,
      },
    },
    {
      id: 13,
      logo: '/dashboard/company_logo/metavault_logo.svg',
      name: 'Metavault',
      pageLink: 'https://metavault.org/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Metavault_reaudit.pdf',
      },
      ecosystem: {
        name: 'polygon',
        icon: '/dashboard/chains/polygon_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 0,
      },
    },
    {
      id: 26,
      logo: '/dashboard/company_logo/moovy_logo.svg',
      name: 'Moovy',
      pageLink: 'https://moovy.io/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Moovy.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 6,
      },
    },
    {
      id: 14,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'PPToken',
      pageLink: null,
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/PPToken.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 1,
        low: 1,
        informational: 4,
      },
    },
    {
      id: 15,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'QuickToken',
      pageLink: null,
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/QuickToken.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 1,
      },
    },
    {
      id: 16,
      logo: '/dashboard/company_logo/quoth_logo.png',
      name: 'Quoth.ai',
      pageLink: 'https://quoth.ai/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Quoth_token_audit_Defimoon.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 0,
      },
    },
    {
      id: 17,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'SDC',
      pageLink: null,
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/SaudiDogeCoin.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 1,
        low: 1,
        informational: 3,
      },
    },
    {
      id: 18,
      logo: '/dashboard/company_logo/shelterz_logo.jpeg',
      name: 'Shelterz',
      pageLink: 'https://token.shelterz.ru/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Shelterz.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 2,
      },
    },
    {
      id: 27,
      logo: '/dashboard/company_logo/smera_logo.svg',
      name: 'SmeraToken',
      pageLink: 'https://smeratoken.com',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/SmeraToken.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 2,
      },
    },
    {
      id: 19,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'SolarDiamond',
      pageLink: null,
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/SolarDiamond.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 0,
      },
    },
    {
      id: 20,
      logo: '/dashboard/company_logo/spherium_logo.png',
      name: 'Spherium',
      pageLink: 'https://spherium.finance/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Spherium_reaudit.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 0,
      },
    },
    {
      id: 21,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'SuperPAD',
      pageLink: null,
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/SuperPad_Reaudit.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 1,
        informational: 3,
      },
    },
    {
      id: 22,
      logo: '/dashboard/company_logo/sqat_logo.jpeg',
      name: 'SQAT',
      pageLink: 'https://buy.syndiqate.io/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Syndiqate_Project.pdf',
      },
      ecosystem: {
        name: 'BSC',
        icon: '/dashboard/chains/BSC_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 0,
      },
    },
    {
      id: 23,
      logo: '/dashboard/company_logo/na_logo.svg',
      name: 'ThunderEV',
      pageLink: null,
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/ThunderEV_reaudit.pdf',
      },
      ecosystem: {
        name: 'ethereum',
        icon: '/dashboard/chains/eth_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 1,
        informational: 0,
      },
    },
    {
      id: 24,
      logo: '/dashboard/company_logo/aerarium_logo.jpeg',
      name: 'AERARIUM FI',
      pageLink: 'https://aerariumfi.com/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/TulipDAOxDefimoon_Aerarium.pdf',
      },
      ecosystem: {
        name: 'N/A',
        icon: '/dashboard/chains/na_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 1,
        informational: 0,
      },
    },
    {
      id: 25,
      logo: '/dashboard/company_logo/zeedex_logo.png',
      name: 'Zeedex',
      pageLink: 'https://zeedex.io/',
      trusted: true,
      audit: { 
        link: 'https://github.com/Defimoonorg/Audit-Report/blob/main/Zeedex.pdf',
      },
      ecosystem: {
        name: 'ethereum',
        icon: '/dashboard/chains/eth_chain.svg',
      },
      category: 'Token',
      issues: {
        high: 0,
        medium: 0,
        low: 0,
        informational: 6,
      },
    },
    // more asset objects...
  ];
  
  export default assets;

  JSON.stringify(assets);