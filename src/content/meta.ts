import type { Lesson } from "./schema";

export const metaLessons: Lesson[] = [
  {
    id: "meta-01",
    slug: "business-manager-setup",
    track: "meta",
    level: "beginner",
    order: 1,
    title: { en: "Business Manager Setup", th: "ตั้งค่า Business Manager" },
    summary: {
      en: "Create a Business Manager, link assets, and add team members the right way.",
      th: "สร้าง Business Manager เชื่อมต่อทรัพยากร และเพิ่มทีมงานอย่างถูกต้อง",
    },
    readTimeMin: 6,
    videoRef: {
      title: { en: "Meta crash course (source)", th: "วิดีโอต้นฉบับ Meta" },
      url: "https://www.youtube.com/results?search_query=meta+business+manager+thailand",
    },
    sections: [
      {
        heading: { en: "Why Business Manager matters", th: "ทำไม Business Manager ถึงสำคัญ" },
        body: {
          en: "Business Manager is your single source of truth for ad accounts, Pages, Pixels, and people. Running ads from a personal account is risky — if it gets disabled, you lose everything. BM separates ownership from access, so you can hand a freelancer a Page without giving them your login.",
          th: "Business Manager คือศูนย์รวมข้อมูลของบัญชีโฆษณา เพจ Pixel และทีมงาน หากยิงแอดจากบัญชีส่วนตัวแล้วถูกแบน จะเสียทุกอย่างทันที BM ช่วยแยกความเป็นเจ้าของกับสิทธิ์การเข้าถึง ทำให้สามารถเปิดสิทธิ์ให้ฟรีแลนซ์โดยไม่ต้องให้รหัสบัญชีส่วนตัว",
        },
      },
      {
        heading: { en: "Setup checklist", th: "เช็กลิสต์ตั้งค่า" },
        body: {
          en: "1) Go to business.facebook.com → Create Account.\n2) Add your Page and Ad Account under Business Assets.\n3) Add team members with role-based access.\n4) Verify your business (required for higher spending tiers).\n5) Set up two-factor auth for every admin.",
          th: "1) เข้า business.facebook.com → สร้างบัญชี\n2) เพิ่มเพจและบัญชีโฆษณาใน Business Assets\n3) เพิ่มทีมงานตามบทบาท (role)\n4) ยืนยันธุรกิจ (จำเป็นสำหรับวงเงินสูง)\n5) เปิด 2FA สำหรับผู้ดูแลทุกคน",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each Business Manager asset to what it represents.",
        th: "จับคู่ทรัพยากรของ Business Manager กับสิ่งที่มันคือ",
      },
      pairs: [
        {
          left: { en: "Ad Account", th: "บัญชีโฆษณา" },
          right: { en: "Where billing & campaigns live", th: "ที่เก็บการชำระเงินและแคมเปญ" },
        },
        {
          left: { en: "Page", th: "เพจ" },
          right: { en: "Your brand's public identity", th: "ตัวตนของแบรนด์ในที่สาธารณะ" },
        },
        {
          left: { en: "Pixel", th: "Pixel" },
          right: { en: "Client-side conversion tracking", th: "ติดตาม conversion ฝั่งเบราว์เซอร์" },
        },
        {
          left: { en: "System User", th: "System User" },
          right: { en: "Service account for API access", th: "บัญชีระบบสำหรับ API" },
        },
      ],
    },
    scenario: {
      prompt: {
        en: "A Thai client hands you their personal Facebook login and asks you to run ads from it for a Songkran campaign. Walk through the right next 3 moves.",
        th: "ลูกค้าคนไทยให้รหัสเฟซบุ๊กส่วนตัวมาแล้วขอให้ยิงแอดสงกรานต์ — อธิบาย 3 ขั้นตอนถัดไปที่ถูกต้อง",
      },
      hints: [
        {
          en: "Never run client work from a personal login — what could replace it?",
          th: "อย่ายิงงานลูกค้าจากบัญชีส่วนตัว — มีอะไรมาแทน?",
        },
        {
          en: "Think about who owns what after the engagement ends.",
          th: "คิดเรื่องความเป็นเจ้าของหลังจบงานด้วย",
        },
      ],
      idealAnswer: {
        en: "1) Ask the client to create a Business Manager (or use the existing one) and add their Page + Ad Account as assets they OWN.\n2) Have them invite you with Partner access — never share passwords. Enable 2FA on both sides.\n3) Verify the business so you unlock higher spend tiers before the Songkran rush hits.",
        th: "1) ขอให้ลูกค้าสร้าง Business Manager (หรือใช้ของเดิม) แล้วเพิ่มเพจกับบัญชีโฆษณาในฐานะทรัพย์สินที่เขาเป็นเจ้าของ\n2) ให้เขาเชิญเราแบบ Partner — ห้ามแชร์รหัสผ่าน เปิด 2FA ทั้งสองฝั่ง\n3) ยืนยันธุรกิจให้เรียบร้อยก่อนช่วงพีคสงกรานต์เพื่อปลดล็อกวงเงินที่สูงขึ้น",
      },
    },
    quiz: {
      questions: [
        {
          prompt: {
            en: "Why should you avoid running ads from a personal Facebook account?",
            th: "ทำไมไม่ควรยิงแอดจากบัญชีเฟซบุ๊กส่วนตัว",
          },
          options: [
            { en: "Higher CPM", th: "CPM แพงกว่า" },
            { en: "Single point of failure if the account is banned", th: "ถ้าโดนแบนจะเสียทุกอย่าง" },
            { en: "Slower delivery", th: "การส่งโฆษณาช้ากว่า" },
            { en: "No access to Reels", th: "ไม่สามารถยิง Reels ได้" },
          ],
          correctIndex: 1,
          explanation: {
            en: "BM keeps ownership separate from access. If your personal account is disabled, anything linked to it goes too.",
            th: "BM แยกความเป็นเจ้าของออกจากสิทธิ์เข้าถึง หากบัญชีส่วนตัวถูกระงับ ทุกอย่างที่ผูกไว้จะหายไปด้วย",
          },
        },
        {
          prompt: {
            en: "Which step is required before unlocking higher spending limits in BM?",
            th: "ต้องทำขั้นตอนใดก่อนปลดล็อกวงเงินใช้จ่ายที่สูงขึ้น",
          },
          options: [
            { en: "Add a profile picture", th: "ใส่รูปโปรไฟล์" },
            { en: "Verify the business", th: "ยืนยันธุรกิจ" },
            { en: "Run one campaign", th: "ยิงแคมเปญหนึ่งครั้ง" },
            { en: "Add three admins", th: "เพิ่มแอดมินสามคน" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Business verification is the gate for higher spend tiers and is required to access many advanced features.",
            th: "การยืนยันธุรกิจคือเงื่อนไขในการปลดล็อกวงเงินสูงขึ้นและฟีเจอร์ขั้นสูง",
          },
        },
        {
          prompt: {
            en: "Best practice when bringing a freelancer onto your Page?",
            th: "วิธีที่ดีที่สุดเมื่อให้สิทธิ์ฟรีแลนซ์เข้าเพจ",
          },
          options: [
            { en: "Share your personal password", th: "แชร์รหัสผ่านส่วนตัว" },
            { en: "Add them via BM with role-based access", th: "เพิ่มผ่าน BM แบบกำหนดบทบาท" },
            { en: "Make them admin of your personal account", th: "ตั้งเป็นแอดมินบัญชีส่วนตัว" },
            { en: "Send screenshots of analytics", th: "ส่งสกรีนช็อตของรายงาน" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Role-based BM access lets you revoke later without touching your personal login.",
            th: "การให้สิทธิ์ผ่าน BM แบบกำหนดบทบาทเพิกถอนได้ภายหลังโดยไม่กระทบบัญชีส่วนตัว",
          },
        },
      ],
    },
  },
  {
    id: "meta-02",
    slug: "ad-account-structure",
    track: "meta",
    level: "beginner",
    order: 2,
    title: { en: "Ad Account Structure", th: "โครงสร้างบัญชีโฆษณา" },
    summary: {
      en: "Campaign → Ad Set → Ad. Understand the hierarchy that controls every dollar.",
      th: "Campaign → Ad Set → Ad — เข้าใจลำดับชั้นที่ควบคุมงบทุกบาท",
    },
    readTimeMin: 5,
    sections: [
      {
        heading: { en: "The three-tier hierarchy", th: "ลำดับชั้นสามระดับ" },
        body: {
          en: "Every Meta campaign follows the same structure: **Campaign → Ad Set → Ad**. Changes at a higher tier cascade downward. Changing a campaign objective resets the learning phase for every ad set beneath it — so get the objective right before building anything else.",
          th: "แคมเปญ Meta ทุกอันใช้โครงสร้างเดียวกัน: **Campaign → Ad Set → Ad** การเปลี่ยนแปลงที่ระดับบนจะส่งผลลงมาข้างล่าง หากเปลี่ยน objective ของ campaign จะทำให้ learning phase ของ ad set ทุกอันถูกรีเซ็ต — ดังนั้นต้องเลือก objective ให้ถูกก่อนเริ่มสร้างอะไรเลย",
        },
      },
      {
        heading: { en: "What each level controls", th: "แต่ละระดับควบคุมอะไร" },
        body: {
          en: "**Campaign:** Sets the objective (Sales, Leads, Traffic, etc.) and whether to use Campaign Budget Optimisation (CBO). This is your strategy statement.\n\n**Ad Set:** Controls WHO sees your ad (audience), WHEN (schedule), WHERE (placements — Feed, Reels, Stories), and HOW MUCH (budget and bid strategy). Most of your testing happens here.\n\n**Ad:** The creative itself — image or video, headline, primary text, description, URL, and CTA button. This is what the user actually sees.",
          th: "**Campaign:** กำหนด objective (Sales, Leads, Traffic ฯลฯ) และเลือกว่าจะใช้ Campaign Budget Optimisation (CBO) หรือไม่ ถือเป็นการกำหนดทิศทางของแคมเปญ\n\n**Ad Set:** ควบคุมว่า ใคร จะเห็นโฆษณา (กลุ่มเป้าหมาย) เมื่อไหร่ (ตารางเวลา) ที่ไหน (placement เช่น Feed, Reels, Stories) และเท่าไหร่ (งบประมาณและกลยุทธ์การประมูล) ส่วนใหญ่การทดสอบจะเกิดขึ้นในระดับนี้\n\n**Ad:** ตัวครีเอทีฟจริงๆ ได้แก่ รูปภาพหรือวิดีโอ หัวข้อ ข้อความหลัก คำอธิบาย URL และปุ่ม CTA ซึ่งเป็นสิ่งที่ผู้ใช้เห็นจริง",
        },
      },
      {
        heading: { en: "Naming conventions that scale", th: "การตั้งชื่อที่รองรับการขยาย" },
        body: {
          en: "Use a consistent naming pattern so you can filter and bulk-edit without confusion:\n\n**Campaign:** `[Product]_[Objective]_[Date]`\nExample: `SkincareTH_SALES_2024-04`\n\n**Ad Set:** `[Audience type]_[Placement]_[Budget]`\nExample: `LAL-Purchasers_Feed_500THB`\n\n**Ad:** `[Format]_[Hook type]_[Version]`\nExample: `Video_ProblemHook_v2`\n\nThis makes reporting readable and scaling fast — you can duplicate and modify without guessing what anything is.",
          th: "ใช้รูปแบบการตั้งชื่อที่สม่ำเสมอเพื่อให้ filter และแก้ไขจำนวนมากได้โดยไม่สับสน:\n\n**Campaign:** `[สินค้า]_[Objective]_[วันที่]`\nตัวอย่าง: `SkincareTH_SALES_2024-04`\n\n**Ad Set:** `[ประเภทกลุ่มเป้าหมาย]_[Placement]_[งบ]`\nตัวอย่าง: `LAL-Purchasers_Feed_500THB`\n\n**Ad:** `[ฟอร์แมต]_[ประเภท Hook]_[เวอร์ชัน]`\nตัวอย่าง: `Video_ProblemHook_v2`\n\nสิ่งนี้ทำให้รายงานอ่านง่ายและการขยาย campaign ทำได้เร็ว ไม่ต้องเดาว่าแต่ละอันคืออะไร",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: {
            en: "Where does the daily budget typically live in the Meta hierarchy?",
            th: "งบประมาณรายวันอยู่ที่ระดับใดของ Meta โดยปกติ",
          },
          options: [
            { en: "Campaign level", th: "ระดับ Campaign" },
            { en: "Ad Set level", th: "ระดับ Ad Set" },
            { en: "Ad level", th: "ระดับ Ad" },
            { en: "Business Manager level", th: "ระดับ Business Manager" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Budget is set at the Ad Set level (or Campaign level if CBO is on). The Ad level only controls creative.",
            th: "งบประมาณตั้งที่ระดับ Ad Set (หรือระดับ Campaign หากเปิด CBO) ระดับ Ad ควบคุมแค่ครีเอทีฟเท่านั้น",
          },
        },
        {
          prompt: {
            en: "Changing a Campaign objective will do what to your learning phase?",
            th: "การเปลี่ยน Campaign objective จะส่งผลอะไรกับ learning phase",
          },
          options: [
            { en: "Speed it up", th: "ทำให้เร็วขึ้น" },
            { en: "Have no effect", th: "ไม่มีผลใดๆ" },
            { en: "Reset it", th: "รีเซ็ตใหม่" },
            { en: "Pause the campaign", th: "หยุดแคมเปญ" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Objective changes reset learning because Meta's algorithm must relearn which users convert for the new goal.",
            th: "การเปลี่ยน objective รีเซ็ต learning เพราะ algorithm ต้องเรียนรู้ใหม่ว่าผู้ใช้กลุ่มไหน convert สำหรับเป้าหมายใหม่",
          },
        },
        {
          prompt: {
            en: "To A/B test different images while keeping the same audience, which level do you change?",
            th: "หากต้องการ A/B test รูปภาพต่างกันแต่ใช้กลุ่มเป้าหมายเดิม ต้องเปลี่ยนระดับใด",
          },
          options: [
            { en: "Campaign level", th: "ระดับ Campaign" },
            { en: "Ad Set level", th: "ระดับ Ad Set" },
            { en: "Ad level", th: "ระดับ Ad" },
            { en: "Business Manager level", th: "ระดับ Business Manager" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Creative variations (images, videos, copy) live at the Ad level. Duplicate the ad, swap the image, keep the Ad Set identical.",
            th: "การเปลี่ยนแปลงครีเอทีฟ (รูปภาพ วิดีโอ ข้อความ) อยู่ที่ระดับ Ad ให้ duplicate ad เปลี่ยนรูป แล้วคง Ad Set เหมือนเดิม",
          },
        },
      ],
    },
  },
  {
    id: "meta-03",
    slug: "campaign-objectives",
    track: "meta",
    level: "beginner",
    order: 3,
    title: { en: "Campaign Objectives", th: "เป้าหมายแคมเปญ" },
    summary: {
      en: "Awareness vs Traffic vs Engagement vs Leads vs Sales — pick the right goal.",
      th: "Awareness, Traffic, Engagement, Leads, Sales — เลือกเป้าหมายให้ถูกตั้งแต่แรก",
    },
    readTimeMin: 7,
    sections: [
      {
        heading: { en: "The 6 objectives explained", th: "6 objectives อธิบายชัดๆ" },
        body: {
          en: "**Awareness:** Maximise reach and brand recall. Use for launches and top-of-funnel.\n\n**Traffic:** Send clicks to a URL. Optimises for link clicks — not purchases.\n\n**Engagement:** Boost likes, comments, shares, and video views. Rarely drives revenue directly.\n\n**Leads:** Collect contact info via an in-app form. No website required.\n\n**App Promotion:** Drive installs or in-app events.\n\n**Sales:** Optimise for purchases or conversions. For Thai e-commerce, this is the default choice once your Pixel has 50+ events per week.",
          th: "**Awareness:** เพิ่ม reach และการจดจำแบรนด์ ใช้สำหรับ launch สินค้าและ top-of-funnel\n\n**Traffic:** ส่งคนไปที่ URL ปรับแต่งเพื่อ link click ไม่ใช่การซื้อ\n\n**Engagement:** เพิ่ม like คอมเมนต์ แชร์ และ video view ไม่ค่อยสร้างรายได้โดยตรง\n\n**Leads:** เก็บข้อมูลติดต่อผ่านแบบฟอร์มใน app ไม่ต้องมีเว็บไซต์\n\n**App Promotion:** เพิ่ม install หรือ event ใน app\n\n**Sales:** ปรับแต่งเพื่อการซื้อหรือ conversion สำหรับ e-commerce ไทย นี่คือตัวเลือกเริ่มต้นเมื่อ Pixel มีข้อมูลครบ 50+ event ต่อสัปดาห์",
        },
      },
      {
        heading: { en: "The Traffic trap", th: "กับดัก Traffic" },
        body: {
          en: "Many beginners pick Traffic because it's cheap per click. CPC can be as low as ฿0.50–1. But the algorithm serves it to click-happy people — not buyers. You'll see high CTR, zero purchases.\n\nThe fix: use **Sales** objective from the first baht if your Pixel has enough data. If you're new with no Pixel events, start with Traffic for 7 days to seed data, then switch to Sales.",
          th: "ผู้เริ่มต้นหลายคนเลือก Traffic เพราะ cost per click ถูก บางครั้ง CPC อยู่ที่ ฿0.50–1 แต่ algorithm จะส่งโฆษณาไปยังคนที่ชอบคลิก ไม่ใช่คนที่ซื้อ จะเห็น CTR สูงแต่ไม่มีการซื้อเลย\n\nวิธีแก้: ใช้ **Sales** objective ตั้งแต่บาทแรกหาก Pixel มีข้อมูลเพียงพอ หากเพิ่งเริ่มและยังไม่มี Pixel event ให้เริ่มด้วย Traffic 7 วันเพื่อสร้างข้อมูล แล้วค่อยเปลี่ยนเป็น Sales",
        },
      },
      {
        heading: { en: "Objective → algorithm signal", th: "Objective → สัญญาณ algorithm" },
        body: {
          en: "Your objective tells Meta's algorithm which signal to optimise for. It then finds users who look like people who have performed that action before.\n\n- Engagement objective → finds people who like and comment posts (not buyers)\n- Traffic objective → finds link-clickers (not buyers)\n- Sales objective → finds declared purchasers\n\nYour objective is the most powerful targeting decision you'll make. Get it right before touching audience settings.",
          th: "Objective บอก algorithm ของ Meta ว่าต้องปรับแต่งเพื่อสัญญาณอะไร จากนั้นจะหาผู้ใช้ที่มีพฤติกรรมคล้ายกับคนที่เคยทำ action นั้นมาก่อน\n\n- Engagement objective → หาคนที่กด like และคอมเมนต์ (ไม่ใช่คนซื้อ)\n- Traffic objective → หาคนที่ชอบคลิก link (ไม่ใช่คนซื้อ)\n- Sales objective → หาคนที่ซื้อสินค้าจริง\n\nการเลือก objective คือการตัดสินใจ targeting ที่ทรงพลังที่สุด ต้องทำให้ถูกก่อนจะแตะการตั้งค่า audience",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: {
            en: "You're running a Thai e-commerce store and want purchases. Which objective?",
            th: "คุณมีร้านค้า e-commerce ไทยและต้องการยอดขาย ควรเลือก objective ใด",
          },
          options: [
            { en: "Traffic", th: "Traffic" },
            { en: "Engagement", th: "Engagement" },
            { en: "Sales", th: "Sales" },
            { en: "Awareness", th: "Awareness" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Sales objective tells the algorithm to optimise for purchase events — the only objective that directly targets buyers.",
            th: "Sales objective สั่ง algorithm ให้ปรับแต่งเพื่อ purchase event — เป็น objective เดียวที่กำหนดเป้าหมายไปยังผู้ซื้อโดยตรง",
          },
        },
        {
          prompt: {
            en: "Traffic objective primarily optimises toward what?",
            th: "Traffic objective ปรับแต่งเพื่ออะไรเป็นหลัก",
          },
          options: [
            { en: "Purchases", th: "การซื้อ" },
            { en: "Link clicks", th: "การคลิก link" },
            { en: "Video views", th: "การดูวิดีโอ" },
            { en: "Form submissions", th: "การกรอกฟอร์ม" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Traffic finds click-happy users — great for reach, terrible for conversion. Use Sales if you want buyers.",
            th: "Traffic หาคนที่ชอบคลิก — ดีสำหรับ reach แต่แย่มากสำหรับ conversion ใช้ Sales หากต้องการผู้ซื้อ",
          },
        },
        {
          prompt: {
            en: "You want to collect phone numbers from Thai users without sending them to a website. Which objective?",
            th: "คุณต้องการเก็บเบอร์โทรจากผู้ใช้ไทยโดยไม่ต้องส่งพวกเขาออกจาก Facebook ควรเลือก objective ใด",
          },
          options: [
            { en: "Traffic", th: "Traffic" },
            { en: "Sales", th: "Sales" },
            { en: "Leads", th: "Leads" },
            { en: "Engagement", th: "Engagement" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Leads objective opens an in-app form — users never leave Facebook. Great for LINE OA integration workflows.",
            th: "Leads objective เปิดฟอร์มใน app ผู้ใช้ไม่ต้องออกจาก Facebook เหมาะมากสำหรับ workflow ที่เชื่อมกับ LINE OA",
          },
        },
      ],
    },
  },
  {
    id: "meta-04",
    slug: "audience-targeting",
    track: "meta",
    level: "beginner",
    order: 4,
    title: { en: "Audience Targeting", th: "การกำหนดกลุ่มเป้าหมาย" },
    summary: {
      en: "Demographics, interests, behaviour — and when to let the algorithm decide.",
      th: "ข้อมูลประชากร ความสนใจ พฤติกรรม และเมื่อใดควรปล่อยให้อัลกอริทึมตัดสินใจ",
    },
    readTimeMin: 8,
    sections: [
      {
        heading: { en: "Core Audiences", th: "Core Audiences" },
        body: {
          en: "Built manually using demographics (age, gender, location), interests (pages they've liked, topics they engage with), and behaviours (purchase behaviour, device type). Good starting point for new accounts.\n\n**Thailand tip:** Always layer `Language: Thai` when targeting Thailand. This filters out expats and tourists, ensuring your budget reaches native Thai speakers. Bangkok alone has ~12M Facebook users — be specific about provinces if your offer is local.",
          th: "สร้างด้วยตนเองโดยใช้ข้อมูลประชากร (อายุ เพศ สถานที่) ความสนใจ (เพจที่ like หัวข้อที่ engage) และพฤติกรรม (พฤติกรรมการซื้อ ประเภทอุปกรณ์) เป็นจุดเริ่มต้นที่ดีสำหรับบัญชีใหม่\n\n**เคล็ดลับไทย:** เพิ่ม `ภาษา: ไทย` เสมอเมื่อกำหนดเป้าหมายในไทย เพื่อกรองชาวต่างชาติและนักท่องเที่ยวออก ให้งบไปถึงคนที่พูดภาษาไทย กรุงเทพฯ เพียงแห่งเดียวมีผู้ใช้ Facebook ~12 ล้านคน หากโปรโมชันเป็นแบบท้องถิ่นควรระบุจังหวัดให้ชัดเจน",
        },
      },
      {
        heading: { en: "Custom Audiences", th: "Custom Audiences" },
        body: {
          en: "Sourced from your own data: customer email/phone upload, website visitors (via Pixel), video viewers, Instagram/Facebook engagers. These audiences are warm — they've touched your brand before.\n\nUse Custom Audiences for:\n- **Retargeting:** show ads to cart abandoners or website visitors who didn't purchase\n- **Exclusion:** exclude existing customers from prospecting campaigns to avoid wasted spend\n- **Source for Lookalikes:** your purchase list is the highest-quality source",
          th: "ดึงจากข้อมูลของคุณเอง: อัปโหลดอีเมล/เบอร์โทรลูกค้า ผู้เข้าชมเว็บ (ผ่าน Pixel) คนดูวิดีโอ และคนที่ engage กับ Instagram/Facebook audience กลุ่มนี้อุ่นแล้ว — พวกเขาเคยสัมผัสแบรนด์มาก่อน\n\nใช้ Custom Audiences สำหรับ:\n- **Retargeting:** แสดงโฆษณาให้คนที่ทิ้งตะกร้าหรือเข้าเว็บแต่ไม่ซื้อ\n- **Exclusion:** ยกเว้นลูกค้าเดิมออกจากแคมเปญ prospecting เพื่อไม่เสียงบโดยเปล่าประโยชน์\n- **Source สำหรับ Lookalikes:** รายชื่อผู้ซื้อคือ source ที่มีคุณภาพสูงที่สุด",
        },
      },
      {
        heading: { en: "Lookalike Audiences", th: "Lookalike Audiences" },
        body: {
          en: "Meta builds a new audience that statistically resembles your source Custom Audience. You choose the percentage: 1% = tightest match (fewest people), 10% = broadest match (most people).\n\nIn Thailand, 1% Lookalike ≈ 600,000–700,000 people (1% of Facebook monthly users in TH). Use your **purchase customer list** as the source for the strongest signal. Use 1–3% for cold prospecting, 4–7% for scale.",
          th: "Meta สร้าง audience ใหม่ที่มีสถิติคล้ายกับ Custom Audience ต้นทางของคุณ คุณเลือก % ได้: 1% = ตรงที่สุด (คนน้อยที่สุด) 10% = กว้างที่สุด (คนมากที่สุด)\n\nในไทย 1% Lookalike ≈ 600,000–700,000 คน (1% ของผู้ใช้ Facebook รายเดือนในไทย) ใช้ **รายชื่อลูกค้าที่ซื้อแล้ว** เป็น source เพื่อสัญญาณที่แข็งแกร่งที่สุด ใช้ 1–3% สำหรับ cold prospecting และ 4–7% เพื่อ scale",
        },
      },
      {
        heading: { en: "Advantage+ Audience", th: "Advantage+ Audience" },
        body: {
          en: "Meta's broad/auto mode. You provide audience hints (age range, interests) but Meta can go outside them if it finds better signals. It works well once you have Pixel purchase data to guide it.\n\n**When to use it:** Accounts with 100+ purchase events/week and proven creatives. Let the algorithm range freely when you have enough conversion signal.\n\n**When to avoid:** New accounts, less than 50 purchase events/week. Stick to manual Core Audiences while you build data.",
          th: "โหมด broad/auto ของ Meta คุณให้ audience hints (ช่วงอายุ ความสนใจ) แต่ Meta สามารถออกนอกขอบเขตได้หากพบสัญญาณที่ดีกว่า ใช้งานได้ดีเมื่อมีข้อมูล purchase จาก Pixel แล้ว\n\n**เมื่อใดควรใช้:** บัญชีที่มี 100+ purchase event/สัปดาห์และ creative ที่พิสูจน์แล้ว ให้ algorithm ทำงานอย่างอิสระเมื่อมีสัญญาณ conversion เพียงพอ\n\n**เมื่อใดควรหลีกเลี่ยง:** บัญชีใหม่ หรือน้อยกว่า 50 purchase event/สัปดาห์ ให้ใช้ Core Audiences แบบ manual ไปก่อนจนกว่าจะมีข้อมูลเพียงพอ",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each audience type to how it's built.",
        th: "จับคู่ประเภท audience กับวิธีที่สร้างขึ้น",
      },
      pairs: [
        {
          left: { en: "Core Audience", th: "Core Audience" },
          right: { en: "Built from demographics & interests", th: "สร้างจากข้อมูลประชากรและความสนใจ" },
        },
        {
          left: { en: "Custom Audience", th: "Custom Audience" },
          right: { en: "Built from your own customer data", th: "สร้างจากข้อมูลลูกค้าของคุณ" },
        },
        {
          left: { en: "Lookalike Audience", th: "Lookalike Audience" },
          right: { en: "Modelled from a source Custom Audience", th: "สร้างจากต้นแบบ Custom Audience" },
        },
        {
          left: { en: "Advantage+ Audience", th: "Advantage+ Audience" },
          right: { en: "Meta finds its own best audience", th: "Meta ค้นหา audience ที่ดีที่สุดเอง" },
        },
      ],
    },
    quiz: {
      questions: [
        {
          prompt: {
            en: "Which audience type uses your uploaded customer list as a source?",
            th: "ประเภท audience ใดใช้รายชื่อลูกค้าที่อัปโหลดเป็นต้นทาง",
          },
          options: [
            { en: "Core Audience", th: "Core Audience" },
            { en: "Custom Audience", th: "Custom Audience" },
            { en: "Lookalike Audience", th: "Lookalike Audience" },
            { en: "Advantage+ Audience", th: "Advantage+ Audience" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Custom Audiences are sourced from your own data — CRM uploads, Pixel events, or engagement.",
            th: "Custom Audiences ดึงจากข้อมูลของคุณเอง — อัปโหลด CRM, Pixel events หรือ engagement",
          },
        },
        {
          prompt: {
            en: "In Thailand, what should you always add when targeting Thai consumers?",
            th: "เมื่อกำหนดเป้าหมายผู้บริโภคไทย ควรเพิ่มอะไรเสมอ",
          },
          options: [
            { en: "Age: 18–35", th: "อายุ: 18–35" },
            { en: "Language: Thai", th: "ภาษา: ไทย" },
            { en: "Behaviour: Online shoppers", th: "พฤติกรรม: นักช้อปออนไลน์" },
            { en: "Device: Mobile only", th: "อุปกรณ์: มือถือเท่านั้น" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Adding Language: Thai filters out expats and tourists, ensuring your budget reaches native Thai speakers.",
            th: "การเพิ่ม ภาษา: ไทย กรองชาวต่างชาติและนักท่องเที่ยวออก ทำให้งบไปถึงคนที่พูดภาษาไทยจริงๆ",
          },
        },
        {
          prompt: {
            en: "For a new ad account with 20 Pixel purchase events, which audience approach is best?",
            th: "สำหรับบัญชีโฆษณาใหม่ที่มี Pixel purchase event 20 ครั้ง ควรใช้แนวทาง audience ใด",
          },
          options: [
            { en: "Advantage+ Audience (broad/auto)", th: "Advantage+ Audience (broad/auto)" },
            { en: "1% Lookalike from purchasers", th: "1% Lookalike จากผู้ซื้อ" },
            { en: "Manual Core Audience with interests", th: "Core Audience แบบ manual พร้อมความสนใจ" },
            { en: "Custom Audience retargeting only", th: "Retarget ด้วย Custom Audience อย่างเดียว" },
          ],
          correctIndex: 2,
          explanation: {
            en: "With fewer than 50 purchase events, Lookalikes and Advantage+ lack enough signal. Manual Core Audience is the stable choice.",
            th: "เมื่อมี purchase event น้อยกว่า 50 ครั้ง Lookalikes และ Advantage+ ยังขาดสัญญาณเพียงพอ Core Audience แบบ manual คือตัวเลือกที่เสถียรที่สุด",
          },
        },
      ],
    },
  },
  {
    id: "meta-05",
    slug: "ad-formats",
    track: "meta",
    level: "beginner",
    order: 5,
    title: { en: "Ad Formats: FB, IG, Reels", th: "ฟอร์แมตโฆษณา: FB, IG, Reels" },
    summary: {
      en: "Image, video, carousel, collection — and which placement loves which format.",
      th: "ภาพ วิดีโอ คารูเซล คอลเลกชัน และตำแหน่งโฆษณาที่เหมาะกับแต่ละแบบ",
    },
    readTimeMin: 6,
    sections: [
      {
        heading: { en: "Single Image & Video", th: "ภาพเดี่ยวและวิดีโอ" },
        body: {
          en: "The simplest format. Image specs: **1080×1080** (square, works everywhere) or **1080×1350** (4:5 portrait, more real estate in feed). Video: keep under **15 seconds for Reels**, 30 seconds max for feed.\n\n**Always design for silent viewing.** 60–80% of Thai Facebook users scroll with sound off. Use burn-in captions or text overlays to communicate your message without audio.",
          th: "ฟอร์แมตที่ง่ายที่สุด ขนาดรูป: **1080×1080** (สี่เหลี่ยมจัตุรัส ใช้ได้ทุกที่) หรือ **1080×1350** (แนวตั้ง 4:5 ใช้พื้นที่ใน feed มากกว่า) วิดีโอ: ควรสั้นกว่า **15 วินาทีสำหรับ Reels** สูงสุด 30 วินาทีสำหรับ feed\n\n**ออกแบบสำหรับการดูโดยไม่มีเสียงเสมอ** ผู้ใช้ Facebook ไทย 60–80% เลื่อนฟีดโดยปิดเสียง ใช้คำบรรยายหรือข้อความ overlay เพื่อสื่อสารโดยไม่ต้องพึ่งเสียง",
        },
      },
      {
        heading: { en: "Carousel (2–10 cards)", th: "Carousel (2–10 การ์ด)" },
        body: {
          en: "Each card has its own image/video, headline, and link. Great for:\n- Showcasing multiple products from a catalogue\n- Telling a step-by-step story (before → process → result)\n- Highlighting different features of one product\n\n**Thai e-commerce tip:** Put your best-selling product in card 1. Add a \"See All\" final card linking to your full catalogue. Carousels get higher CTR than single images for product-heavy campaigns.",
          th: "แต่ละการ์ดมีรูปภาพ/วิดีโอ หัวข้อ และ link เป็นของตัวเอง เหมาะสำหรับ:\n- แสดงสินค้าหลายอย่างจาก catalogue\n- เล่าเรื่องทีละขั้นตอน (ก่อน → ระหว่าง → หลัง)\n- เน้นฟีเจอร์ต่างๆ ของสินค้าชิ้นเดียว\n\n**เคล็ดลับ e-commerce ไทย:** ใส่สินค้าขายดีที่สุดในการ์ดที่ 1 เพิ่มการ์ดสุดท้ายที่บอกว่า 'ดูทั้งหมด' ที่ link ไปยัง catalogue เต็ม Carousel ได้ CTR สูงกว่าภาพเดี่ยวสำหรับแคมเปญที่เน้นสินค้า",
        },
      },
      {
        heading: { en: "Collection & Instant Experience", th: "Collection และ Instant Experience" },
        body: {
          en: "A fullscreen mobile experience that opens when tapped. The outer ad is a hero image or video; below it, a product grid pulls from your catalogue. Tap a product → add to cart without leaving Facebook.\n\nThis format is conversion-focused and works especially well for Thai fashion and beauty brands with large product catalogues. Setup requires a Facebook Catalogue connected to your Business Manager.",
          th: "ประสบการณ์เต็มจอบนมือถือที่เปิดขึ้นเมื่อแตะ โฆษณาด้านนอกเป็นรูปหรือวิดีโอ hero ด้านล่างเป็นกริดสินค้าจาก catalogue แตะสินค้า → เพิ่มลงตะกร้าโดยไม่ต้องออกจาก Facebook\n\nฟอร์แมตนี้เน้น conversion และใช้งานได้ดีกับแบรนด์แฟชั่นและความงามไทยที่มีสินค้าหลายชนิด ต้องเชื่อมต่อ Facebook Catalogue กับ Business Manager ก่อนใช้งาน",
        },
      },
      {
        heading: { en: "Reels placement rules", th: "กฎ placement สำหรับ Reels" },
        body: {
          en: "Reels gets an algorithm reach boost right now — use it. Key rules:\n- **Ratio:** 9:16 (1080×1920). No letterboxing.\n- **Safe zone:** Keep all text and logos out of the bottom 35% of the frame. The UI overlays (caption, like button, profile) cover this area.\n- **Hook:** First 1.5 seconds determines whether someone skips. Start with movement, a face, or a visual question.\n- **Length:** 7–15 seconds performs best. Beyond 30 seconds sees sharp drop-off in completion rate.",
          th: "Reels ได้รับการ boost reach จาก algorithm อยู่ตอนนี้ — ใช้มันให้ได้ กฎสำคัญ:\n- **อัตราส่วน:** 9:16 (1080×1920) ห้ามมี letterbox\n- **Safe zone:** เก็บข้อความและโลโก้ไว้พ้นจากด้านล่าง 35% ของเฟรม เพราะ UI (caption ปุ่ม like โปรไฟล์) ปิดทับบริเวณนี้\n- **Hook:** 1.5 วินาทีแรกกำหนดว่าคนจะ skip หรือไม่ เริ่มด้วยการเคลื่อนไหว ใบหน้า หรือคำถามภาพ\n- **ความยาว:** 7–15 วินาทีให้ผลดีที่สุด เกิน 30 วินาทีอัตราการดูจนจบลดฮวบ",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: {
            en: "What's the ideal image ratio for maximum feed real estate on Facebook and Instagram?",
            th: "อัตราส่วนรูปภาพที่ดีที่สุดสำหรับพื้นที่ใน feed ของ Facebook และ Instagram คืออะไร",
          },
          options: [
            { en: "16:9 (landscape)", th: "16:9 (แนวนอน)" },
            { en: "1:1 (square)", th: "1:1 (สี่เหลี่ยมจัตุรัส)" },
            { en: "4:5 (portrait)", th: "4:5 (แนวตั้ง)" },
            { en: "9:16 (full vertical)", th: "9:16 (แนวตั้งเต็ม)" },
          ],
          correctIndex: 2,
          explanation: {
            en: "4:5 (1080×1350) takes up more vertical space in the feed than a square, giving you more visual real estate without being cropped.",
            th: "4:5 (1080×1350) ใช้พื้นที่แนวตั้งใน feed มากกว่าสี่เหลี่ยมจัตุรัส ให้พื้นที่ภาพมากกว่าโดยไม่ถูกครอบ",
          },
        },
        {
          prompt: {
            en: "Why should you always design Meta ads for silent viewing?",
            th: "ทำไมต้องออกแบบโฆษณา Meta สำหรับการดูโดยไม่มีเสียงเสมอ",
          },
          options: [
            { en: "Thai phones have no speakers", th: "มือถือไทยไม่มีลำโพง" },
            { en: "Most users scroll with sound off", th: "ผู้ใช้ส่วนใหญ่เลื่อนฟีดโดยปิดเสียง" },
            { en: "Meta mutes all ads automatically", th: "Meta ปิดเสียงโฆษณาทุกอันอัตโนมัติ" },
            { en: "It's required by Thai law", th: "กฎหมายไทยกำหนดไว้" },
          ],
          correctIndex: 1,
          explanation: {
            en: "60–80% of Facebook users scroll with sound off. Use burn-in captions and text overlays to tell your story without audio.",
            th: "ผู้ใช้ Facebook 60–80% เลื่อนฟีดโดยปิดเสียง ใช้คำบรรยายและ text overlay เพื่อเล่าเรื่องโดยไม่ต้องพึ่งเสียง",
          },
        },
        {
          prompt: {
            en: "What is the safe zone rule for Reels ads?",
            th: "กฎ safe zone สำหรับโฆษณา Reels คืออะไร",
          },
          options: [
            { en: "Keep text out of the top 20%", th: "เก็บข้อความออกจาก 20% บน" },
            { en: "Keep text out of the bottom 35%", th: "เก็บข้อความออกจาก 35% ล่าง" },
            { en: "Use only centred text", th: "ใช้ข้อความตรงกลางเท่านั้น" },
            { en: "No text allowed in Reels", th: "ห้ามมีข้อความใน Reels" },
          ],
          correctIndex: 1,
          explanation: {
            en: "The bottom 35% of Reels is covered by the platform UI (captions, like button, profile handle). Text in this zone gets hidden.",
            th: "35% ด้านล่างของ Reels ถูกปิดทับด้วย UI ของแพลตฟอร์ม (คำบรรยาย ปุ่ม like ชื่อโปรไฟล์) ข้อความในบริเวณนี้จะถูกซ่อน",
          },
        },
      ],
    },
  },
  {
    id: "meta-06",
    slug: "pixel-and-capi",
    track: "meta",
    level: "advanced",
    order: 6,
    title: { en: "Pixel & Conversions API", th: "Pixel และ Conversions API" },
    summary: {
      en: "Server-side tracking after iOS 14.5 — how CAPI rescues your attribution.",
      th: "ตามผลแบบฝั่งเซิร์ฟเวอร์หลัง iOS 14.5 — วิธีที่ CAPI ช่วยกู้การวัดผล",
    },
    readTimeMin: 10,
    sections: [
      {
        heading: { en: "What the Pixel does", th: "Pixel ทำอะไร" },
        body: {
          en: "The Meta Pixel is a JavaScript snippet installed on your website. It fires events in the user's browser — PageView, ViewContent, AddToCart, InitiateCheckout, Purchase — and sends them to Meta. These events train your campaign's algorithm and power attribution (knowing which ad led to which purchase).\n\nWithout Pixel data, Meta cannot optimise for conversions. You're flying blind.",
          th: "Meta Pixel คือ JavaScript snippet ที่ติดตั้งบนเว็บไซต์ของคุณ มันยิง event ในเบราว์เซอร์ของผู้ใช้ — PageView, ViewContent, AddToCart, InitiateCheckout, Purchase — แล้วส่งข้อมูลไปยัง Meta event เหล่านี้ฝึก algorithm ของแคมเปญและขับเคลื่อน attribution (การรู้ว่าโฆษณาใดนำไปสู่การซื้อใด)\n\nหากไม่มีข้อมูล Pixel Meta ไม่สามารถปรับแต่งเพื่อ conversion ได้ เหมือนบินโดยไม่มีเครื่องมือนำทาง",
        },
      },
      {
        heading: { en: "iOS 14.5 changed everything", th: "iOS 14.5 เปลี่ยนทุกอย่าง" },
        body: {
          en: "Apple's App Tracking Transparency (ATT) framework (released April 2021) requires users to explicitly opt-in to tracking. In Thailand, 40–60% of iOS users decline. This broke Pixel signals for a large chunk of iPhone traffic.\n\nConsequences:\n- Purchase data became incomplete\n- Attribution windows shrank (from 28-day to 7-day click / 1-day view)\n- CPMs rose as algorithm signal degraded\n- Reported ROAS dropped — not because performance fell, but because attribution broke",
          th: "กรอบ App Tracking Transparency (ATT) ของ Apple (เปิดตัวเมษายน 2021) กำหนดให้ผู้ใช้ต้องยินยอมติดตามอย่างชัดเจน ในไทย ผู้ใช้ iOS 40–60% ปฏิเสธ สิ่งนี้ทำลายสัญญาณ Pixel สำหรับ traffic iPhone จำนวนมาก\n\nผลที่ตามมา:\n- ข้อมูลการซื้อไม่สมบูรณ์\n- ช่วง attribution ลดลง (จาก 28 วันเหลือ 7 วัน click / 1 วัน view)\n- CPM สูงขึ้นเมื่อสัญญาณ algorithm เสื่อมลง\n- ROAS ที่รายงานลดลง — ไม่ใช่เพราะประสิทธิภาพแย่ลง แต่เพราะ attribution พัง",
        },
      },
      {
        heading: { en: "Conversions API (CAPI)", th: "Conversions API (CAPI)" },
        body: {
          en: "CAPI sends conversion events from your **server** directly to Meta's API — bypassing the browser entirely. iOS tracking restrictions can't touch server-to-server communication.\n\nSetup options:\n- **Shopify:** Install the Meta channel app (1-click, no code)\n- **WooCommerce:** Use the Meta for WooCommerce plugin\n- **Custom:** Send events via Meta's HTTP API from your backend\n\nRun **both Pixel and CAPI together** for maximum signal. The two sources overlap — which leads to the deduplication step.",
          th: "CAPI ส่ง conversion event จาก **เซิร์ฟเวอร์** ของคุณไปยัง API ของ Meta โดยตรง — ข้ามเบราว์เซอร์ไปเลย ข้อจำกัดการติดตามของ iOS ไม่สามารถส่งผลต่อการสื่อสาร server-to-server ได้\n\nตัวเลือกการตั้งค่า:\n- **Shopify:** ติดตั้ง Meta channel app (1 คลิก ไม่ต้องเขียน code)\n- **WooCommerce:** ใช้ plugin Meta for WooCommerce\n- **Custom:** ส่ง event ผ่าน HTTP API ของ Meta จาก backend\n\nรัน **ทั้ง Pixel และ CAPI ร่วมกัน** เพื่อสัญญาณสูงสุด ทั้งสองแหล่งซ้อนทับกัน — ซึ่งนำไปสู่ขั้นตอน deduplication",
        },
      },
      {
        heading: { en: "Deduplication", th: "การ Deduplicate" },
        body: {
          en: "When Pixel and CAPI both fire for the same purchase, Meta receives the event twice. Without deduplication, your reported purchase count inflates and algorithm training is polluted.\n\nFix: send the **same `event_id`** in both the Pixel and CAPI call for the same event. Meta matches them by ID and counts it once. In Shopify's native integration this is handled automatically.",
          th: "เมื่อทั้ง Pixel และ CAPI ยิงสำหรับการซื้อเดียวกัน Meta จะรับ event สองครั้ง หากไม่ deduplicate จำนวนการซื้อที่รายงานจะพองตัวและการฝึก algorithm จะเสียหาย\n\nวิธีแก้: ส่ง **`event_id` เดียวกัน** ทั้งใน Pixel และ CAPI call สำหรับ event เดียวกัน Meta จะจับคู่ตาม ID และนับเพียงครั้งเดียว ใน integration native ของ Shopify ขั้นตอนนี้ทำโดยอัตโนมัติ",
        },
      },
      {
        heading: { en: "Event Match Quality (EMQ)", th: "Event Match Quality (EMQ)" },
        body: {
          en: "Meta scores how well your event parameters match a real person in their system. Higher EMQ = better attribution = more accurate optimisation.\n\nTo improve EMQ, send these parameters with every Purchase event:\n- Email (hashed with SHA-256)\n- Phone number (Thai format: `+66XXXXXXXXX`, then hashed)\n- First name, last name (hashed)\n- City, zip code, country\n\nAim for EMQ > 7.0. Check it in Events Manager → your Pixel → Event Match Quality tab.",
          th: "Meta ให้คะแนนว่า event parameters ของคุณตรงกับคนจริงในระบบของพวกเขาแค่ไหน EMQ สูงกว่า = attribution ดีกว่า = การปรับแต่งแม่นยำกว่า\n\nเพื่อเพิ่ม EMQ ส่ง parameters เหล่านี้กับทุก Purchase event:\n- อีเมล (hash ด้วย SHA-256)\n- เบอร์โทรศัพท์ (รูปแบบไทย: `+66XXXXXXXXX` แล้ว hash)\n- ชื่อ นามสกุล (hash)\n- เมือง รหัสไปรษณีย์ ประเทศ\n\nตั้งเป้า EMQ > 7.0 ตรวจสอบได้ที่ Events Manager → Pixel ของคุณ → แท็บ Event Match Quality",
        },
      },
    ],
    scenario: {
      prompt: {
        en: "Your Thai Shopify store is running Meta Sales campaigns. ROAS dropped from ฿6 to ฿2 after an iOS update. Walk through your diagnostic steps.",
        th: "ร้าน Shopify ไทยของคุณกำลังรัน Meta Sales campaigns ROAS ลดจาก ฿6 เหลือ ฿2 หลังจาก iOS อัปเดต อธิบายขั้นตอนการวิเคราะห์ปัญหา",
      },
      hints: [
        { en: "Is actual revenue down, or just reported ROAS?", th: "รายได้จริงลดลง หรือแค่ ROAS ที่รายงานลดลง?" },
        { en: "What tracking layer might have been affected by the iOS update?", th: "ชั้น tracking ใดที่อาจได้รับผลกระทบจาก iOS อัปเดต?" },
      ],
      idealAnswer: {
        en: "1) Check actual revenue in Shopify against the period — if real revenue is stable, the drop is attribution loss, not performance loss.\n2) Audit the Pixel in Events Manager: check EMQ score, verify Purchase events are firing, confirm event_id deduplication is active.\n3) Verify CAPI is enabled in your Meta Shopify channel. If not, enable it — this recovers server-side purchase signals iOS can't block.\n4) Check your attribution window setting — make sure you're reading 7-day click, not 1-day click which understates results.\n5) If CAPI was already on, check the event_id field to ensure deduplication is working (EMQ should be above 7).",
        th: "1) ตรวจสอบรายได้จริงใน Shopify เทียบกับช่วงนั้น — หากรายได้จริงเสถียร การลดลงคือการสูญเสีย attribution ไม่ใช่ประสิทธิภาพที่ตก\n2) ตรวจสอบ Pixel ใน Events Manager: เช็กคะแนน EMQ ยืนยันว่า Purchase event กำลังยิงอยู่ และตรวจสอบว่า event_id deduplication ทำงานอยู่\n3) ตรวจสอบว่าเปิด CAPI ใน Meta Shopify channel หรือไม่ ถ้าไม่ ให้เปิด — ช่วยกู้สัญญาณการซื้อฝั่งเซิร์ฟเวอร์ที่ iOS ไม่สามารถบล็อกได้\n4) ตรวจสอบการตั้งค่า attribution window — ให้แน่ใจว่าอ่านค่าแบบ 7-day click ไม่ใช่ 1-day click ที่แสดงผลต่ำกว่าความเป็นจริง\n5) หาก CAPI เปิดอยู่แล้ว ตรวจสอบ event_id field เพื่อให้แน่ใจว่า deduplication ทำงาน (EMQ ควรเกิน 7)",
      },
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What is the main advantage of CAPI over Pixel alone?", th: "ข้อดีหลักของ CAPI เหนือ Pixel อย่างเดียวคืออะไร" },
          options: [
            { en: "It's cheaper to run", th: "ถูกกว่าในการรัน" },
            { en: "It sends events server-side, bypassing iOS blocks", th: "ส่ง event ฝั่งเซิร์ฟเวอร์ ข้ามการบล็อกของ iOS" },
            { en: "It works without a Facebook account", th: "ทำงานได้โดยไม่ต้องมีบัญชี Facebook" },
            { en: "It tracks competitors' ads", th: "ติดตามโฆษณาของคู่แข่ง" },
          ],
          correctIndex: 1,
          explanation: {
            en: "CAPI communicates server-to-server, so iOS tracking restrictions (ATT) cannot block it.",
            th: "CAPI สื่อสาร server-to-server ดังนั้นข้อจำกัดการติดตามของ iOS (ATT) ไม่สามารถบล็อกได้",
          },
        },
        {
          prompt: { en: "How do you prevent double-counting when running Pixel + CAPI together?", th: "จะป้องกัน double-counting เมื่อรัน Pixel + CAPI ร่วมกันได้อย่างไร" },
          options: [
            { en: "Disable Pixel once CAPI is live", th: "ปิด Pixel เมื่อ CAPI เปิดใช้งานแล้ว" },
            { en: "Use the same event_id in both calls", th: "ใช้ event_id เดียวกันในทั้งสอง call" },
            { en: "Run them on alternate days", th: "รันสลับวัน" },
            { en: "Set a lower budget for CAPI", th: "ตั้งงบน้อยลงสำหรับ CAPI" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Meta deduplicates by matching the event_id field. Send the same ID in both the Pixel and CAPI call for the same event.",
            th: "Meta deduplicate โดยจับคู่ event_id field ส่ง ID เดียวกันทั้งใน Pixel และ CAPI call สำหรับ event เดียวกัน",
          },
        },
        {
          prompt: { en: "What EMQ score should you target for strong attribution?", th: "ควรตั้งเป้า EMQ เท่าไหร่สำหรับ attribution ที่แข็งแกร่ง" },
          options: [
            { en: "Above 3.0", th: "เกิน 3.0" },
            { en: "Above 5.0", th: "เกิน 5.0" },
            { en: "Above 7.0", th: "เกิน 7.0" },
            { en: "Exactly 10.0", th: "เท่ากับ 10.0 พอดี" },
          ],
          correctIndex: 2,
          explanation: {
            en: "EMQ above 7.0 indicates strong parameter matching. Send hashed email, phone, name, and location with every event.",
            th: "EMQ เกิน 7.0 บ่งชี้ว่า parameter matching แข็งแกร่ง ส่งอีเมล เบอร์โทร ชื่อ และสถานที่แบบ hash กับทุก event",
          },
        },
      ],
    },
  },
  {
    id: "meta-07",
    slug: "creative-testing",
    track: "meta",
    level: "advanced",
    order: 7,
    title: { en: "Creative Testing & ROAS", th: "ทดสอบครีเอทีฟและ ROAS" },
    summary: {
      en: "A/B framework: hooks, formats, hooks again. Optimise toward ROAS, not CTR.",
      th: "วิธีทดสอบ A/B: hook, ฟอร์แมต, hook อีกครั้ง — โฟกัส ROAS ไม่ใช่ CTR",
    },
    readTimeMin: 9,
    sections: [
      {
        heading: { en: "The hook formula", th: "สูตร Hook" },
        body: {
          en: "The first 3 seconds of video — or the thumbnail of an image ad — determine whether someone stops or scrolls. A strong hook does one of three things:\n\n1. **Pattern interrupt:** Something unexpected (a loud sound, an unusual visual, a strange juxtaposition)\n2. **Problem statement:** Lead with the pain: \"ผิวมันจนแต่งหน้าไม่ติด?\" (Oily skin that won't hold makeup?)\n3. **Product in use:** Show the outcome immediately. Don't explain — demonstrate.\n\nFor Thai audiences: fast cuts, text overlays, and UGC (user-generated content) aesthetic consistently outperform polished brand films.",
          th: "3 วินาทีแรกของวิดีโอ — หรือรูป thumbnail ของโฆษณาภาพ — กำหนดว่าคนจะหยุดดูหรือเลื่อนผ่าน Hook ที่ดีทำสิ่งใดสิ่งหนึ่งใน 3 สิ่งนี้:\n\n1. **Pattern interrupt:** สิ่งที่ไม่คาดคิด (เสียงดัง ภาพแปลกตา การจัดวางที่ผิดปกติ)\n2. **Problem statement:** เริ่มด้วยความเจ็บปวด: \"ผิวมันจนแต่งหน้าไม่ติด?\"\n3. **Product in use:** แสดงผลลัพธ์ทันที ไม่ต้องอธิบาย — สาธิต\n\nสำหรับผู้ชมไทย: การตัดเร็ว text overlay และสไตล์ UGC (user-generated content) ให้ผลดีกว่าฟิล์มแบรนด์ที่ขัดเกลาอย่างสม่ำเสมอ",
        },
      },
      {
        heading: { en: "A/B testing structure", th: "โครงสร้างการทดสอบ A/B" },
        body: {
          en: "Test one variable at a time. The order that produces the most learning per baht:\n\n**Phase 1 — Test hooks** (same product, same audience, same format, change only the first 3 seconds)\n**Phase 2 — Test formats** (take the winning hook, run it as single video vs carousel vs Reels)\n**Phase 3 — Test copy** (winning format, test benefit-led vs price-led vs social-proof-led headlines)\n\nMinimum test duration: 3–5 days. Minimum events to judge: 50 results per variant. Ending tests too early is the #1 mistake — early leaders often flip.",
          th: "ทดสอบตัวแปรเดียวในคราวเดียว ลำดับที่ให้ความรู้มากที่สุดต่อบาท:\n\n**Phase 1 — ทดสอบ Hook** (สินค้าเดียวกัน กลุ่มเป้าหมายเดียวกัน ฟอร์แมตเดียวกัน เปลี่ยนแค่ 3 วินาทีแรก)\n**Phase 2 — ทดสอบฟอร์แมต** (นำ hook ที่ชนะมารันเป็นวิดีโอเดี่ยว vs carousel vs Reels)\n**Phase 3 — ทดสอบข้อความ** (ฟอร์แมตที่ชนะ ทดสอบ headline แบบเน้น benefit vs ราคา vs social proof)\n\nระยะเวลาทดสอบขั้นต่ำ: 3–5 วัน ผลลัพธ์ขั้นต่ำสำหรับการตัดสิน: 50 results ต่อตัวแปร การยุติการทดสอบเร็วเกินไปคือความผิดพลาดอันดับ 1 — ผู้นำในช่วงแรกมักพลิกได้",
        },
      },
      {
        heading: { en: "Dynamic Creative Testing (DCT)", th: "Dynamic Creative Testing (DCT)" },
        body: {
          en: "Upload multiple headlines, images, and CTAs. Meta automatically mixes and matches combinations and finds the best-performing mix. Faster than manual A/B for early-stage testing when you don't know where to start.\n\n**When to use DCT:** First 2 weeks of a new campaign, when you have 5+ creative assets to test.\n**When to turn it off:** Once you have a clear winner and want predictable, stable delivery for scaling. DCT can rotate into losing variants unexpectedly.",
          th: "อัปโหลด headline รูปภาพ และ CTA หลายแบบ Meta จะผสมและจับคู่โดยอัตโนมัติแล้วหาชุดที่ทำงานได้ดีที่สุด เร็วกว่า A/B แบบ manual สำหรับการทดสอบระยะแรกเมื่อยังไม่รู้จะเริ่มจากไหน\n\n**เมื่อใดควรใช้ DCT:** 2 สัปดาห์แรกของแคมเปญใหม่ เมื่อมี creative asset 5+ ชิ้นที่จะทดสอบ\n**เมื่อใดควรปิด:** เมื่อมีผู้ชนะที่ชัดเจนและต้องการ delivery ที่คาดเดาได้และเสถียรสำหรับการ scale DCT อาจหมุนไปยัง variant ที่แพ้โดยไม่คาดคิด",
        },
      },
      {
        heading: { en: "Optimise toward ROAS, not CTR", th: "โฟกัส ROAS ไม่ใช่ CTR" },
        body: {
          en: "High CTR + low ROAS = you're attracting curious people who don't buy. A clickbait thumbnail can get 5% CTR and 0.5 ROAS. A boring-looking product image can get 1% CTR and 8 ROAS.\n\n**Thai market ROAS benchmarks (2024):**\n- Below ฿2: Unprofitable at most margins — pause and rethink creative\n- ฿3–4: Breakeven for most Thai product categories at standard margins\n- ฿5–6: Healthy scaling zone — increase budget\n- Above ฿8: Aggressive scale — keep feeding it\n\nAlways optimise and scale the metric that pays your bills, not the one that looks good in a screenshot.",
          th: "CTR สูง + ROAS ต่ำ = คุณกำลังดึงดูดคนที่อยากรู้แต่ไม่ซื้อ thumbnail clickbait อาจได้ CTR 5% แต่ ROAS 0.5 รูปภาพสินค้าที่ดูธรรมดาอาจได้ CTR 1% แต่ ROAS 8\n\n**เบนช์มาร์ก ROAS ตลาดไทย (2024):**\n- ต่ำกว่า ฿2: ไม่คุ้มทุนในมาร์จิ้นส่วนใหญ่ — หยุดและคิดใหม่เรื่อง creative\n- ฿3–4: คุ้มทุนสำหรับสินค้าไทยทั่วไปในมาร์จิ้นมาตรฐาน\n- ฿5–6: โซน scale ที่ดี — เพิ่มงบได้\n- เกิน ฿8: scale เชิงรุก — ใส่งบต่อไป\n\nปรับแต่งและ scale metric ที่ทำให้คุ้มทุนเสมอ ไม่ใช่ metric ที่ดูดีในสกรีนช็อต",
        },
      },
    ],
    scenario: {
      prompt: {
        en: "A Thai advertiser sees 3.5% CTR but only 0.8 ROAS after 4 days on a Sales campaign. What are the most likely diagnoses and what do they do next?",
        th: "นักโฆษณาไทยเห็น CTR 3.5% แต่ ROAS เพียง 0.8 หลังจาก 4 วันใน Sales campaign อะไรคือสาเหตุที่เป็นไปได้มากที่สุดและควรทำอะไรต่อไป",
      },
      hints: [
        { en: "High CTR means the creative is working — so what isn't?", th: "CTR สูงหมายความว่า creative ใช้งานได้ — แล้วอะไรที่ไม่ทำงาน?" },
        { en: "Think about what happens after the click.", th: "คิดถึงสิ่งที่เกิดขึ้นหลังการคลิก" },
      ],
      idealAnswer: {
        en: "High CTR with low ROAS points to a post-click problem, not a creative problem. Diagnose:\n1) Check landing page load speed — Thai mobile on 4G, >3s load kills conversion.\n2) Check price-to-value alignment — the ad may be over-promising vs. the landing page.\n3) Verify Pixel Purchase event is firing correctly — 0.8 ROAS might be an attribution gap, not actual poor performance. Check Shopify orders vs. Meta-reported conversions.\n4) Check audience — if using broad targeting or Advantage+, the creative hook may attract window-shoppers.\nNext move: don't pause the creative (CTR proves it gets attention). Fix the landing page first.",
        th: "CTR สูงกับ ROAS ต่ำชี้ไปที่ปัญหาหลังการคลิก ไม่ใช่ปัญหา creative วิเคราะห์:\n1) ตรวจสอบความเร็วโหลด landing page — มือถือไทยบน 4G โหลดเกิน 3 วินาทีทำลาย conversion\n2) ตรวจสอบความสอดคล้องของราคากับคุณค่า — โฆษณาอาจสัญญาเกินกว่า landing page จะทำได้\n3) ตรวจสอบว่า Pixel Purchase event ยิงถูกต้องหรือไม่ — ROAS 0.8 อาจเป็นช่องว่าง attribution ไม่ใช่ประสิทธิภาพที่แย่จริง เปรียบออเดอร์ Shopify กับ conversion ที่ Meta รายงาน\n4) ตรวจสอบ audience — หากใช้ broad targeting หรือ Advantage+ hook อาจดึงดูดแค่คนอยากดู\nขั้นตอนต่อไป: อย่าหยุด creative (CTR พิสูจน์ว่าดึงความสนใจได้) แก้ landing page ก่อน",
      },
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What does high CTR combined with low ROAS most likely indicate?", th: "CTR สูงรวมกับ ROAS ต่ำบ่งชี้อะไรมากที่สุด" },
          options: [
            { en: "The creative is bad", th: "Creative ไม่ดี" },
            { en: "The audience is wrong", th: "กลุ่มเป้าหมายผิด" },
            { en: "A post-click problem (landing page, pricing)", th: "ปัญหาหลังการคลิก (landing page, ราคา)" },
            { en: "The Pixel is broken", th: "Pixel พัง" },
          ],
          correctIndex: 2,
          explanation: {
            en: "High CTR means the creative works. Low ROAS means something breaks after the click — check load speed, pricing, and landing page experience.",
            th: "CTR สูงหมายความว่า creative ใช้งานได้ ROAS ต่ำหมายความว่ามีบางอย่างพังหลังการคลิก — ตรวจสอบความเร็วโหลด ราคา และประสบการณ์ landing page",
          },
        },
        {
          prompt: { en: "What is the minimum number of results per variant before judging an A/B test?", th: "ต้องมีผลลัพธ์ขั้นต่ำกี่ครั้งต่อตัวแปรก่อนตัดสิน A/B test" },
          options: [
            { en: "10", th: "10" },
            { en: "25", th: "25" },
            { en: "50", th: "50" },
            { en: "200", th: "200" },
          ],
          correctIndex: 2,
          explanation: {
            en: "50 results per variant is the minimum for statistical reliability. Early leaders in A/B tests often flip after enough data accumulates.",
            th: "50 results ต่อตัวแปรคือขั้นต่ำสำหรับความน่าเชื่อถือทางสถิติ ผู้นำในช่วงแรกของ A/B test มักพลิกได้หลังจากสะสมข้อมูลเพียงพอ",
          },
        },
        {
          prompt: { en: "In the Thai market, which ROAS is generally considered the healthy scaling zone?", th: "ในตลาดไทย ROAS เท่าไหร่ที่ถือว่าเป็นโซน scale ที่ดี" },
          options: [
            { en: "฿1–2", th: "฿1–2" },
            { en: "฿3–4", th: "฿3–4" },
            { en: "฿5–6", th: "฿5–6" },
            { en: "฿10+", th: "฿10+" },
          ],
          correctIndex: 2,
          explanation: {
            en: "฿5–6 ROAS is the healthy scaling zone for most Thai categories. ฿3–4 is breakeven. Above ฿8 is aggressive scale territory.",
            th: "ROAS ฿5–6 คือโซน scale ที่ดีสำหรับหมวดหมู่ไทยส่วนใหญ่ ฿3–4 คือจุดคุ้มทุน เกิน ฿8 คือโซน scale เชิงรุก",
          },
        },
      ],
    },
  },
  {
    id: "meta-08",
    slug: "thailand-playbook",
    track: "meta",
    level: "advanced",
    order: 8,
    title: { en: "Thailand Playbook: LINE, Songkran, Thai copy", th: "เพลย์บุ๊กไทย: LINE, สงกรานต์ และก็อปปี้ไทย" },
    summary: {
      en: "LINE OA integration, Songkran seasonal beats, Thai-language copywriting, ฿ benchmarks.",
      th: "เชื่อมต่อ LINE OA แคมเปญสงกรานต์ การเขียนก็อปปี้ภาษาไทย และเบนช์มาร์กราคาในไทย",
    },
    readTimeMin: 12,
    thailandFocus: true,
    sections: [
      {
        heading: { en: "LINE OA integration", th: "การเชื่อมต่อ LINE OA" },
        body: {
          en: "LINE is Thailand's #1 messaging app with 55M+ users. Meta Lead Ads + LINE OA is the highest-converting sales funnel for Thai markets.\n\n**How it works:** User sees your Meta Lead Ad → fills the in-app form → your automation (Zapier, n8n, or Make) fires a LINE OA message to their LINE within seconds.\n\nThis cuts follow-up time from hours (manually calling leads) to under 60 seconds. For beauty, education, and real estate verticals in Thailand, this workflow typically cuts CPA by 30–50% versus landing-page funnels.",
          th: "LINE คือแอปส่งข้อความอันดับ 1 ของไทยที่มีผู้ใช้ 55 ล้านคน+ Meta Lead Ads + LINE OA คือ funnel การขายที่มี conversion สูงที่สุดสำหรับตลาดไทย\n\n**วิธีการทำงาน:** ผู้ใช้เห็น Meta Lead Ad → กรอกฟอร์มใน app → automation ของคุณ (Zapier, n8n หรือ Make) ส่งข้อความ LINE OA ไปยัง LINE ของพวกเขาภายในไม่กี่วินาที\n\nสิ่งนี้ลดเวลา follow-up จากหลายชั่วโมง (โทรหา lead ด้วยตนเอง) เหลือไม่ถึง 60 วินาที สำหรับธุรกิจความงาม การศึกษา และอสังหาริมทรัพย์ในไทย workflow นี้มักลด CPA 30–50% เทียบกับ funnel แบบ landing page",
        },
      },
      {
        heading: { en: "Songkran campaign timeline", th: "ไทม์ไลน์แคมเปญสงกรานต์" },
        body: {
          en: "Thai New Year (Songkran, 13–15 April) is the biggest spending window for beauty, fashion, travel, and gifting. Plan your campaign in 4 phases:\n\n**3 weeks before (late March):** Awareness objective. Build brand recall with video views. 1x normal budget.\n\n**2 weeks before:** Traffic + Engagement. Drive people to your product pages. 1.5x budget.\n\n**1 week before:** Switch to Sales objective. Retarget video viewers and website visitors. 2x budget.\n\n**Campaign days (13–15 April):** Maximum spend. Pre-approve all creatives by April 10 — Meta's review queue slows dramatically during peak periods. Have backup creatives ready. Mobile traffic peaks on April 14 evening.",
          th: "วันสงกรานต์ (13–15 เมษายน) คือช่วงการใช้จ่ายสูงสุดสำหรับสินค้าความงาม แฟชั่น การเดินทาง และของขวัญ วางแผนแคมเปญเป็น 4 ระยะ:\n\n**3 สัปดาห์ก่อน (ปลายมีนาคม):** Awareness objective สร้างการจดจำแบรนด์ด้วย video view งบ 1x ปกติ\n\n**2 สัปดาห์ก่อน:** Traffic + Engagement ดึงคนเข้าหน้าสินค้า งบ 1.5x\n\n**1 สัปดาห์ก่อน:** เปลี่ยนเป็น Sales objective Retarget คนดูวิดีโอและผู้เข้าชมเว็บ งบ 2x\n\n**วันงาน (13–15 เมษายน):** ใช้จ่ายสูงสุด อนุมัติ creative ทั้งหมดก่อนวันที่ 10 เมษายน — คิวรีวิวของ Meta ช้ามากในช่วงพีค เตรียม backup creative ไว้ traffic มือถือจะพีคคืนวันที่ 14 เมษายน",
        },
      },
      {
        heading: { en: "Thai copywriting patterns", th: "รูปแบบการเขียนก็อปปี้ภาษาไทย" },
        body: {
          en: "Thai Facebook copy has different conversion triggers than Western markets:\n\n**Lead with price or discount in the headline:**\n`ลด 30% วันนี้เท่านั้น` (30% off today only)\n\n**Use social proof with specific numbers:**\n`คนไทยกว่า 50,000 คนเลือกแล้ว` (50,000+ Thais have chosen)\n\n**Create scarcity and urgency:**\n`เหลือแค่ 12 ชั่วโมง / สินค้าใกล้หมด` (Only 12 hours left / stock running out)\n\n**Tone:** Use informal Thai (`เรา/คุณ`, not `ท่าน`). Thai Facebook skews conversational. Mirror how your customers text, not how brands write press releases.\n\n**Emoji:** 🔥 📦 ✅ 💄 are high-CTR boosters on Thai feeds. 1–3 emoji in the first line performs better than none.",
          th: "ก็อปปี้ Facebook ภาษาไทยมี trigger การ convert ที่ต่างจากตลาดตะวันตก:\n\n**นำด้วยราคาหรือส่วนลดในหัวข้อ:**\n`ลด 30% วันนี้เท่านั้น`\n\n**ใช้ social proof พร้อมตัวเลขเฉพาะเจาะจง:**\n`คนไทยกว่า 50,000 คนเลือกแล้ว`\n\n**สร้าง scarcity และ urgency:**\n`เหลือแค่ 12 ชั่วโมง / สินค้าใกล้หมด`\n\n**โทน:** ใช้ภาษาไทยแบบไม่เป็นทางการ (`เรา/คุณ` ไม่ใช่ `ท่าน`) Facebook ไทยเน้นความสนทนา เลียนแบบวิธีที่ลูกค้าส่งข้อความ ไม่ใช่แบบที่แบรนด์เขียนข่าวประชาสัมพันธ์\n\n**Emoji:** 🔥 📦 ✅ 💄 เพิ่ม CTR สูงใน feed ไทย มี 1–3 emoji ในบรรทัดแรกให้ผลดีกว่าไม่มีเลย",
        },
      },
      {
        heading: { en: "฿ benchmarks (Thailand, 2024)", th: "เบนช์มาร์ก ฿ (ไทย, 2024)" },
        body: {
          en: "Use these as directional targets, not guarantees — your industry and creative quality will vary:\n\n**CPM (cost per 1,000 impressions):**\n- Facebook Feed: ฿50–120\n- Instagram Feed: ฿60–130\n- Reels: ฿30–70 (cheaper, algorithm-favoured)\n\n**CPC (cost per click):**\n- Traffic campaigns: ฿1–4\n- Sales campaigns: ฿3–8\n\n**CPL (cost per lead, Lead Ads):**\n- Beauty/lifestyle: ฿60–200\n- Real estate: ฿300–800\n- Education: ฿150–400\n\n**ROAS targets:**\n- Breakeven (most categories): ฿3–4\n- Healthy scale: ฿5–8\n- Aggressive scale: ฿8+",
          th: "ใช้ตัวเลขเหล่านี้เป็นเป้าหมายบ่งชี้ทิศทาง ไม่ใช่การรับประกัน — อุตสาหกรรมและคุณภาพ creative ของคุณจะแตกต่างกัน:\n\n**CPM (ค่าต่อ 1,000 impression):**\n- Facebook Feed: ฿50–120\n- Instagram Feed: ฿60–130\n- Reels: ฿30–70 (ถูกกว่า algorithm ให้ความสำคัญ)\n\n**CPC (ค่าต่อคลิก):**\n- Traffic campaigns: ฿1–4\n- Sales campaigns: ฿3–8\n\n**CPL (ค่าต่อ lead สำหรับ Lead Ads):**\n- ความงาม/ไลฟ์สไตล์: ฿60–200\n- อสังหาริมทรัพย์: ฿300–800\n- การศึกษา: ฿150–400\n\n**เป้าหมาย ROAS:**\n- คุ้มทุน (ส่วนใหญ่): ฿3–4\n- Scale แบบดี: ฿5–8\n- Scale เชิงรุก: ฿8+",
        },
      },
    ],
    scenario: {
      prompt: {
        en: "A Thai skincare brand wants to run a Songkran campaign with ฿50,000 total budget. They have a Business Manager, Pixel with 200+ purchase events, and a LINE OA account. Plan the 4-week campaign timeline and budget allocation.",
        th: "แบรนด์สกินแคร์ไทยต้องการรันแคมเปญสงกรานต์ด้วยงบรวม ฿50,000 มี Business Manager Pixel ที่มี 200+ purchase event และบัญชี LINE OA วางแผน timeline 4 สัปดาห์และการจัดสรรงบ",
      },
      hints: [
        { en: "When should you switch from Awareness to Sales objective?", th: "ควรเปลี่ยนจาก Awareness เป็น Sales objective เมื่อไหร่?" },
        { en: "How can LINE OA reduce your CPA in this context?", th: "LINE OA ช่วยลด CPA ในบริบทนี้ได้อย่างไร?" },
      ],
      idealAnswer: {
        en: "Week 1 (฿5,000 – 10%): Awareness/Video Views. Launch 2 hero videos introducing the Songkran limited edition. Build a video-viewer Custom Audience.\n\nWeek 2 (฿10,000 – 20%): Traffic. Drive to product page. Pixel fires ViewContent + AddToCart. Build website visitor audience.\n\nWeek 3 (฿15,000 – 30%): Sales objective. Retarget video viewers + cart abandoners with LINE OA Lead Ad as secondary path (collect LINE IDs for instant follow-up). Run 1% LLA from purchasers cold.\n\nSongkran days Apr 13–15 (฿20,000 – 40%): Max spend on Sales. Pre-approve creatives by Apr 10. Activate LINE OA automation so every lead gets messaged within 60 seconds. Monitor every 2 hours and pause under-performers.\n\nTotal: ฿50,000 across 4 weeks with back-loaded budget where buying intent peaks.",
        th: "สัปดาห์ 1 (฿5,000 – 10%): Awareness/Video Views เปิดตัววิดีโอ hero 2 ชิ้นแนะนำ Limited Edition สงกรานต์ สร้าง Custom Audience จากคนดูวิดีโอ\n\nสัปดาห์ 2 (฿10,000 – 20%): Traffic ดึงคนเข้าหน้าสินค้า Pixel ยิง ViewContent + AddToCart สร้าง audience จากผู้เข้าชมเว็บ\n\nสัปดาห์ 3 (฿15,000 – 30%): Sales objective Retarget คนดูวิดีโอ + ทิ้งตะกร้าด้วย LINE OA Lead Ad เป็นเส้นทางรอง (เก็บ LINE ID เพื่อ follow-up ทันที) รัน 1% LLA จากผู้ซื้อแบบ cold\n\nวันสงกรานต์ 13–15 เมษา (฿20,000 – 40%): ใช้จ่ายสูงสุดบน Sales อนุมัติ creative ก่อน 10 เมษา เปิด LINE OA automation ให้ทุก lead ได้รับข้อความภายใน 60 วินาที ติดตามทุก 2 ชั่วโมงและหยุด campaign ที่ทำงานต่ำกว่าเกณฑ์\n\nรวม: ฿50,000 ตลอด 4 สัปดาห์ โดยใช้งบหนักในช่วงหลังที่ intent การซื้อสูงสุด",
      },
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What is the main advantage of combining Meta Lead Ads with LINE OA in Thailand?", th: "ข้อดีหลักของการรวม Meta Lead Ads กับ LINE OA ในไทยคืออะไร" },
          options: [
            { en: "Cheaper CPM rates", th: "อัตรา CPM ที่ถูกกว่า" },
            { en: "Instant automated follow-up via Thailand's #1 messaging app", th: "Follow-up อัตโนมัติทันทีผ่านแอปส่งข้อความอันดับ 1 ของไทย" },
            { en: "No need for a landing page", th: "ไม่ต้องมี landing page" },
            { en: "Free ad placements", th: "placement โฆษณาฟรี" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Automating a LINE message within 60 seconds of a lead form submission dramatically increases conversion vs. manual callbacks hours later.",
            th: "การส่งข้อความ LINE อัตโนมัติภายใน 60 วินาทีหลังกรอกฟอร์ม lead เพิ่ม conversion อย่างมากเมื่อเทียบกับการโทรกลับด้วยตนเองหลายชั่วโมงต่อมา",
          },
        },
        {
          prompt: { en: "When should you pre-approve Songkran campaign creatives by?", th: "ควรอนุมัติ creative แคมเปญสงกรานต์ล่วงหน้าภายในวันที่เท่าไหร่" },
          options: [
            { en: "April 1", th: "1 เมษายน" },
            { en: "April 10", th: "10 เมษายน" },
            { en: "April 13 (campaign day)", th: "13 เมษายน (วันแคมเปญ)" },
            { en: "April 15", th: "15 เมษายน" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Meta's review queue slows significantly during Songkran peak. Pre-approve everything by April 10 to avoid launch delays.",
            th: "คิวรีวิวของ Meta ช้ามากในช่วงพีคสงกรานต์ อนุมัติทุกอย่างล่วงหน้าภายใน 10 เมษายนเพื่อหลีกเลี่ยงความล่าช้าในการเปิดตัว",
          },
        },
        {
          prompt: { en: "Which Thai copywriting element most reliably boosts CTR on Facebook?", th: "องค์ประกอบการเขียนก็อปปี้ไทยใดที่เพิ่ม CTR บน Facebook ได้อย่างน่าเชื่อถือที่สุด" },
          options: [
            { en: "Formal language (ท่าน)", th: "ภาษาทางการ (ท่าน)" },
            { en: "English loanwords only", th: "คำยืมภาษาอังกฤษเท่านั้น" },
            { en: "Price/discount in headline + 1–3 emoji in first line", th: "ราคา/ส่วนลดในหัวข้อ + 1–3 emoji ในบรรทัดแรก" },
            { en: "Long-form product descriptions", th: "คำอธิบายสินค้าแบบยาว" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Thai buyers respond to price-led headlines and emoji signals. Formal language reduces click-through; concise urgency with emoji increases it.",
            th: "ผู้ซื้อไทยตอบสนองต่อ headline ที่นำด้วยราคาและสัญญาณ emoji ภาษาทางการลด click-through ความเร่งด่วนกระชับพร้อม emoji เพิ่มขึ้น",
          },
        },
      ],
    },
  },
];
