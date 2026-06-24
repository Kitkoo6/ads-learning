import type { Lesson } from "./schema";

export const tiktokLessons: Lesson[] = [
  {
    id: "tt-01",
    slug: "business-account",
    track: "tiktok",
    level: "beginner",
    order: 1,
    title: { en: "TikTok Business Account", th: "สมัครบัญชี TikTok Business" },
    summary: {
      en: "Switch from Personal to Business, claim your handle, link your Page.",
      th: "เปลี่ยนจากบัญชีส่วนตัวเป็น Business จองชื่อ และเชื่อมต่อเพจ",
    },
    readTimeMin: 4,
    sections: [
      {
        heading: { en: "Personal vs Business account", th: "บัญชีส่วนตัว vs บัญชี Business" },
        body: {
          en: "Personal accounts can go viral, but they can't run ads, access analytics, or link to external URLs in bio. Business accounts unlock everything you need to advertise:\n\n- TikTok Ads Manager access\n- Link-in-bio (external URL)\n- Full analytics (audience demographics, video performance)\n- TikTok Shop seller tools\n- Creator Marketplace for influencer partnerships\n\n**The one trade-off:** You lose access to the full commercial music library. Business accounts must use the Commercial Music Library (CML) for ads. Most popular Thai trending sounds are available — but check before recording a campaign video.",
          th: "บัญชีส่วนตัวอาจไวรัลได้ แต่ไม่สามารถยิงโฆษณา เข้าถึงสถิติ หรือลิงก์ URL ภายนอกใน bio บัญชี Business ปลดล็อกทุกสิ่งที่ต้องการสำหรับการโฆษณา:\n\n- เข้าถึง TikTok Ads Manager\n- Link-in-bio (URL ภายนอก)\n- สถิติครบถ้วน (ข้อมูลประชากร audience ประสิทธิภาพวิดีโอ)\n- เครื่องมือร้านค้า TikTok Shop\n- Creator Marketplace สำหรับพาร์ทเนอร์ Influencer\n\n**ข้อแลกเปลี่ยนหนึ่งข้อ:** คุณจะสูญเสียการเข้าถึงไลบรารีเพลงเชิงพาณิชย์ทั้งหมด บัญชี Business ต้องใช้ Commercial Music Library (CML) สำหรับโฆษณา เสียงไทยยอดนิยมส่วนใหญ่มีอยู่ แต่ควรตรวจสอบก่อนบันทึกวิดีโอแคมเปญ",
        },
      },
      {
        heading: { en: "How to switch", th: "วิธีเปลี่ยนบัญชี" },
        body: {
          en: "1) Open TikTok → Profile → Menu (three lines) → Settings and Privacy\n2) Manage Account → Switch to Business Account\n3) Choose your category (e-commerce, retail, beauty, etc.)\n4) Add your website URL and contact email\n5) Your username, content, and followers carry over completely — nothing is lost\n\nAfter switching, go to **TikTok Business Center** (business.tiktok.com) to set up your advertising infrastructure. Think of Business Center as TikTok's equivalent of Meta Business Manager.",
          th: "1) เปิด TikTok → โปรไฟล์ → เมนู (สามขีด) → การตั้งค่าและความเป็นส่วนตัว\n2) จัดการบัญชี → เปลี่ยนเป็นบัญชีธุรกิจ\n3) เลือกประเภทธุรกิจ (e-commerce ค้าปลีก ความงาม ฯลฯ)\n4) เพิ่ม URL เว็บไซต์และอีเมลติดต่อ\n5) ชื่อผู้ใช้ คอนเทนต์ และผู้ติดตามจะคงอยู่ครบถ้วน ไม่มีอะไรหาย\n\nหลังเปลี่ยนแล้ว ไปที่ **TikTok Business Center** (business.tiktok.com) เพื่อตั้งค่าโครงสร้างการโฆษณา Business Center คือเทียบเท่า Meta Business Manager ของ TikTok",
        },
      },
      {
        heading: { en: "TikTok Business Center", th: "TikTok Business Center" },
        body: {
          en: "Business Center is the hub that connects your TikTok account, ad accounts, pixels, and team members. Key setup steps:\n\n**1) Create your Business Center** at business.tiktok.com\n**2) Add your TikTok ad account** (or create a new one)\n**3) Connect your TikTok profile** so your organic account and ad account are linked\n**4) Add team members** with role-based access (Admin, Operator, Analyst)\n**5) Install the TikTok Pixel** on your website from the Assets section\n\nBest practice: the **brand owns** the Business Center. Agencies should be added as partners — they request access, you approve. Never hand over your Business Center admin credentials.",
          th: "Business Center คือ hub ที่เชื่อมต่อบัญชี TikTok บัญชีโฆษณา pixel และทีมงานของคุณ ขั้นตอนตั้งค่าหลัก:\n\n**1) สร้าง Business Center** ที่ business.tiktok.com\n**2) เพิ่มบัญชีโฆษณา TikTok** (หรือสร้างใหม่)\n**3) เชื่อมต่อโปรไฟล์ TikTok** เพื่อให้บัญชี organic และบัญชีโฆษณาเชื่อมกัน\n**4) เพิ่มสมาชิกทีม** พร้อมสิทธิ์ตามบทบาท (Admin, Operator, Analyst)\n**5) ติดตั้ง TikTok Pixel** บนเว็บไซต์จากส่วน Assets\n\nแนวปฏิบัติที่ดีที่สุด: **แบรนด์เป็นเจ้าของ** Business Center agency ควรถูกเพิ่มในฐานะ partner — พวกเขาขอสิทธิ์ คุณอนุมัติ อย่ามอบข้อมูลเข้าสู่ระบบ admin ของ Business Center ให้ใคร",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: { en: "What is the main trade-off when switching to a TikTok Business account?", th: "ข้อแลกเปลี่ยนหลักเมื่อเปลี่ยนเป็นบัญชี TikTok Business คืออะไร" },
          options: [
            { en: "You lose all your followers", th: "คุณสูญเสียผู้ติดตามทั้งหมด" },
            { en: "You lose access to the full commercial music library", th: "คุณสูญเสียการเข้าถึงไลบรารีเพลงเชิงพาณิชย์ทั้งหมด" },
            { en: "Your content gets lower reach", th: "คอนเทนต์ของคุณได้ reach น้อยลง" },
            { en: "You cannot post organic content", th: "คุณไม่สามารถโพสต์คอนเทนต์ organic ได้" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Business accounts must use the Commercial Music Library for ads. Followers, content, and username transfer over without loss.",
            th: "บัญชี Business ต้องใช้ Commercial Music Library สำหรับโฆษณา ผู้ติดตาม คอนเทนต์ และชื่อผู้ใช้จะโอนมาครบโดยไม่มีอะไรหาย",
          },
        },
        {
          prompt: { en: "What is TikTok Business Center equivalent to in Meta?", th: "TikTok Business Center เทียบเท่ากับอะไรใน Meta" },
          options: [
            { en: "Meta Ads Manager", th: "Meta Ads Manager" },
            { en: "Meta Business Manager", th: "Meta Business Manager" },
            { en: "Meta Pixel", th: "Meta Pixel" },
            { en: "Meta Creator Studio", th: "Meta Creator Studio" },
          ],
          correctIndex: 1,
          explanation: {
            en: "TikTok Business Center is the central hub for accounts, assets, and team access — the same role Meta Business Manager plays.",
            th: "TikTok Business Center คือ hub กลางสำหรับบัญชี assets และสิทธิ์ทีม — บทบาทเดียวกับ Meta Business Manager",
          },
        },
        {
          prompt: { en: "Who should own the TikTok Business Center when working with an agency?", th: "ใครควรเป็นเจ้าของ TikTok Business Center เมื่อทำงานกับ agency" },
          options: [
            { en: "The agency, so they have full control", th: "Agency เพื่อให้มีการควบคุมเต็มที่" },
            { en: "The brand, with agency added as a partner", th: "แบรนด์ โดยเพิ่ม agency เป็น partner" },
            { en: "Both equally share ownership", th: "ทั้งคู่แบ่งความเป็นเจ้าของเท่ากัน" },
            { en: "TikTok assigns ownership automatically", th: "TikTok กำหนดความเป็นเจ้าของโดยอัตโนมัติ" },
          ],
          correctIndex: 1,
          explanation: {
            en: "The brand always owns the Business Center. If you change agencies, you revoke access — you never lose your ad account or pixel history.",
            th: "แบรนด์เป็นเจ้าของ Business Center เสมอ หากเปลี่ยน agency คุณเพียงเพิกถอนสิทธิ์ โดยไม่สูญเสียบัญชีโฆษณาหรือประวัติ pixel",
          },
        },
      ],
    },
  },
  {
    id: "tt-02",
    slug: "ads-manager",
    track: "tiktok",
    level: "beginner",
    order: 2,
    title: { en: "Ads Manager Walkthrough", th: "ทัวร์ TikTok Ads Manager" },
    summary: {
      en: "Dashboard, library, reporting — what every panel does and where bills come in.",
      th: "หน้าหลัก คลังครีเอทีฟ และรายงาน — แต่ละหน้าทำอะไร และบิลมาจากไหน",
    },
    readTimeMin: 6,
    sections: [
      {
        heading: { en: "Campaign → Ad Group → Ad", th: "Campaign → Ad Group → Ad" },
        body: {
          en: "TikTok uses the same three-tier structure as Meta:\n\n**Campaign:** Objective + budget type (daily or lifetime). One campaign objective per campaign.\n\n**Ad Group:** Audience targeting, placement, schedule, bid strategy, and optimization goal. This is where you decide who sees your ad and how much you pay per outcome.\n\n**Ad:** The video, copy, display name, and CTA button. Each ad group can contain multiple ads — TikTok recommends 3–5 ad variations per group for the algorithm to test.\n\nKey difference from Meta: TikTok's algorithm is especially sensitive to creative quality. A weaker creative in the same audience will underperform dramatically.",
          th: "TikTok ใช้โครงสร้างสามระดับเหมือน Meta:\n\n**Campaign:** Objective + ประเภทงบประมาณ (รายวันหรือตลอดอายุ) หนึ่ง campaign objective ต่อหนึ่ง campaign\n\n**Ad Group:** การกำหนดกลุ่มเป้าหมาย placement ตารางเวลา กลยุทธ์การประมูล และเป้าหมายการปรับแต่ง ที่นี่คือที่ที่คุณตัดสินใจว่าใครจะเห็นโฆษณาและจ่ายเท่าไหร่ต่อผลลัพธ์\n\n**Ad:** วิดีโอ ข้อความ ชื่อที่แสดง และปุ่ม CTA แต่ละ ad group สามารถมี ad หลายรายการ TikTok แนะนำ 3–5 ad variation ต่อ group เพื่อให้ algorithm ทดสอบ\n\nความแตกต่างหลักจาก Meta: algorithm ของ TikTok ไวต่อคุณภาพ creative มาก creative ที่อ่อนแอกว่าในกลุ่มเป้าหมายเดียวกันจะทำงานได้ต่ำกว่ามาก",
        },
      },
      {
        heading: { en: "Creative Library", th: "Creative Library" },
        body: {
          en: "All uploaded videos live in the Creative Library (Assets → Creative Library). Key things to know:\n\n- **TikTok recommends uploading raw footage** — their AI can generate multiple variations from a single clip\n- Review auto-generated variants and delete weak ones before they get budget\n- Videos must be 9:16, 15–60 seconds for In-Feed ads, under 500MB\n- Add captions, text overlays, and stickers in the Creative Editor before publishing\n- The library also stores your catalog images and carousel assets",
          th: "วิดีโอที่อัปโหลดทั้งหมดอยู่ใน Creative Library (Assets → Creative Library) สิ่งสำคัญที่ควรรู้:\n\n- **TikTok แนะนำให้อัปโหลด footage ดิบ** — AI ของพวกเขาสามารถสร้าง variation หลายแบบจากคลิปเดียว\n- ตรวจสอบ variant ที่สร้างอัตโนมัติและลบอันที่อ่อนแอก่อนที่จะได้รับงบ\n- วิดีโอต้องเป็น 9:16 ความยาว 15–60 วินาทีสำหรับ In-Feed ad และขนาดไม่เกิน 500MB\n- เพิ่มคำบรรยาย text overlay และ sticker ใน Creative Editor ก่อนเผยแพร่\n- Library ยังเก็บรูปภาพ catalog และ carousel assets ของคุณด้วย",
        },
      },
      {
        heading: { en: "Reporting panel", th: "หน้ารายงาน" },
        body: {
          en: "Access reporting from the main nav: **Dashboard** (high-level overview) or **Reporting** (customisable tables).\n\nDefault metrics to watch:\n- **Impressions, Reach, CPM** — delivery and cost\n- **Clicks, CTR, CPC** — engagement with your ad\n- **Video Views, Average Watch Time** — creative performance\n- **Conversions, CPA, ROAS** — business outcomes\n\nTikTok's attribution window default is **7-day click / 1-day view**. Create custom columns and save report templates — you'll use the same view every day.",
          th: "เข้าถึงรายงานจาก nav หลัก: **Dashboard** (ภาพรวมระดับสูง) หรือ **Reporting** (ตารางที่ปรับแต่งได้)\n\nMetric หลักที่ควรดู:\n- **Impressions, Reach, CPM** — การส่งและต้นทุน\n- **Clicks, CTR, CPC** — การ engage กับโฆษณา\n- **Video Views, Average Watch Time** — ประสิทธิภาพ creative\n- **Conversions, CPA, ROAS** — ผลลัพธ์ทางธุรกิจ\n\nช่วง attribution เริ่มต้นของ TikTok คือ **7-day click / 1-day view** สร้าง custom column และบันทึก template รายงาน คุณจะใช้ view เดียวกันทุกวัน",
        },
      },
      {
        heading: { en: "Billing and credit limits", th: "การเรียกเก็บเงินและวงเงิน" },
        body: {
          en: "New TikTok ad accounts start with a low daily credit limit — often ฿5,000–10,000/day. This increases automatically after 30 days of consistent spending without policy violations.\n\n**Payment options for Thai advertisers:**\n- Credit/debit card (Visa, Mastercard)\n- Wire transfer (bank transfer)\n- TikTok Business Credit (available to large accounts)\n\nSet a **daily budget cap** at the campaign level to avoid runaway spend. Bills are issued weekly or when you hit the billing threshold. Check under **Billing & Payments** in your account settings.",
          th: "บัญชีโฆษณา TikTok ใหม่เริ่มต้นด้วยวงเงิน credit รายวันต่ำ มักอยู่ที่ ฿5,000–10,000/วัน วงเงินนี้จะเพิ่มขึ้นโดยอัตโนมัติหลังจาก 30 วันของการใช้จ่ายสม่ำเสมอโดยไม่มีการละเมิดนโยบาย\n\n**ตัวเลือกการชำระเงินสำหรับผู้โฆษณาไทย:**\n- บัตรเครดิต/เดบิต (Visa, Mastercard)\n- โอนเงินผ่านธนาคาร\n- TikTok Business Credit (สำหรับบัญชีขนาดใหญ่)\n\nตั้ง **daily budget cap** ที่ระดับ campaign เพื่อป้องกันการใช้จ่ายที่ควบคุมไม่ได้ บิลจะออกรายสัปดาห์หรือเมื่อถึงเกณฑ์การเรียกเก็บเงิน ตรวจสอบได้ที่ **Billing & Payments** ในการตั้งค่าบัญชี",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: { en: "TikTok recommends how many ad variations per Ad Group?", th: "TikTok แนะนำให้มี ad variation กี่รายการต่อ Ad Group" },
          options: [
            { en: "1", th: "1" },
            { en: "3–5", th: "3–5" },
            { en: "10–15", th: "10–15" },
            { en: "As many as possible", th: "มากที่สุดเท่าที่จะเป็นไปได้" },
          ],
          correctIndex: 1,
          explanation: {
            en: "TikTok recommends 3–5 ad variations per group, giving the algorithm options to test without over-splitting the budget.",
            th: "TikTok แนะนำ 3–5 ad variation ต่อ group เพื่อให้ algorithm มีตัวเลือกทดสอบโดยไม่แบ่งงบมากเกินไป",
          },
        },
        {
          prompt: { en: "What is TikTok's default attribution window?", th: "ช่วง attribution เริ่มต้นของ TikTok คืออะไร" },
          options: [
            { en: "1-day click / 1-day view", th: "1-day click / 1-day view" },
            { en: "7-day click / 1-day view", th: "7-day click / 1-day view" },
            { en: "28-day click / 7-day view", th: "28-day click / 7-day view" },
            { en: "7-day click / 7-day view", th: "7-day click / 7-day view" },
          ],
          correctIndex: 1,
          explanation: {
            en: "TikTok defaults to 7-day click / 1-day view attribution. You can adjust this in your Ad Group settings.",
            th: "TikTok ใช้ 7-day click / 1-day view attribution เป็นค่าเริ่มต้น คุณสามารถปรับได้ในการตั้งค่า Ad Group",
          },
        },
        {
          prompt: { en: "What video specs are required for TikTok In-Feed ads?", th: "ข้อกำหนดวิดีโอสำหรับ TikTok In-Feed ad คืออะไร" },
          options: [
            { en: "16:9, 30–120 seconds", th: "16:9 ความยาว 30–120 วินาที" },
            { en: "1:1, any length", th: "1:1 ความยาวอะไรก็ได้" },
            { en: "9:16, 15–60 seconds, under 500MB", th: "9:16 ความยาว 15–60 วินาที ขนาดไม่เกิน 500MB" },
            { en: "9:16, under 15 seconds only", th: "9:16 ความยาวน้อยกว่า 15 วินาทีเท่านั้น" },
          ],
          correctIndex: 2,
          explanation: {
            en: "TikTok In-Feed ads require 9:16 ratio, 15–60 seconds, under 500MB. Shorter is generally better — aim for 15–30 seconds.",
            th: "TikTok In-Feed ad ต้องใช้อัตราส่วน 9:16 ความยาว 15–60 วินาที ขนาดไม่เกิน 500MB ยิ่งสั้นยิ่งดี ควรตั้งเป้าที่ 15–30 วินาที",
          },
        },
      ],
    },
  },
  {
    id: "tt-03",
    slug: "objectives",
    track: "tiktok",
    level: "beginner",
    order: 3,
    title: { en: "Campaign Objectives", th: "เป้าหมายแคมเปญ" },
    summary: {
      en: "Reach, Traffic, Video Views, Conversions — what fires what algorithm.",
      th: "Reach, Traffic, Video Views, Conversions — แต่ละแบบเรียกใช้อัลกอริทึมต่างกัน",
    },
    readTimeMin: 6,
    sections: [
      {
        heading: { en: "Awareness objectives", th: "Awareness objectives" },
        body: {
          en: "**Reach:** Maximise unique viewers. Best for: brand launches, seasonal announcements, or reaching a broad Thai audience efficiently. CPM is typically lower than conversion objectives.\n\n**Video Views:** Maximise 2-second or 6-second views. The algorithm prioritises users who are likely to watch your video longer. Use for: storytelling, product demos, building a video-viewer Custom Audience for later retargeting.\n\nAwareness campaigns don't optimise for purchases — use them to build the top of your funnel, not to sell.",
          th: "**Reach:** เพิ่ม unique viewer สูงสุด เหมาะสำหรับ: เปิดตัวแบรนด์ ประกาศตามฤดูกาล หรือการเข้าถึงผู้ชมไทยวงกว้างอย่างมีประสิทธิภาพ CPM มักต่ำกว่า conversion objectives\n\n**Video Views:** เพิ่มการดู 2 วินาทีหรือ 6 วินาทีสูงสุด algorithm จะให้ความสำคัญกับผู้ใช้ที่มีแนวโน้มดูวิดีโอนานขึ้น ใช้สำหรับ: เล่าเรื่อง สาธิตสินค้า สร้าง Custom Audience จากคนดูวิดีโอสำหรับ retarget ในภายหลัง\n\nแคมเปญ Awareness ไม่ได้ปรับแต่งเพื่อการซื้อ ใช้เพื่อสร้าง funnel ส่วนบน ไม่ใช่เพื่อขาย",
        },
      },
      {
        heading: { en: "Consideration objectives", th: "Consideration objectives" },
        body: {
          en: "**Traffic:** Send users to a URL (website, landing page, or TikTok profile). Optimises for link clicks. Like Meta, this is a trap if you use it expecting purchases — it finds clickers, not buyers.\n\n**Community Interaction:** Grow followers and profile visits. Use sparingly — only if building an organic TikTok presence is a stated goal.\n\n**App Installs:** Drive downloads from App Store or Play Store. Links directly to your app listing. Optimises for installs.",
          th: "**Traffic:** ส่งผู้ใช้ไปยัง URL (เว็บไซต์ landing page หรือโปรไฟล์ TikTok) ปรับแต่งเพื่อ link click เช่นเดียวกับ Meta นี่คือกับดักหากคุณใช้โดยคาดหวังการซื้อ — มันหานักคลิก ไม่ใช่ผู้ซื้อ\n\n**Community Interaction:** เพิ่มผู้ติดตามและการเข้าชมโปรไฟล์ ใช้อย่างประหยัด — เฉพาะเมื่อการสร้าง organic TikTok เป็นเป้าหมายที่ระบุไว้\n\n**App Installs:** ดาวน์โหลดจาก App Store หรือ Play Store ลิงก์ตรงไปยังหน้า app ปรับแต่งเพื่อ install",
        },
      },
      {
        heading: { en: "Conversion objectives", th: "Conversion objectives" },
        body: {
          en: "**Product Sales:** Optimise for purchases. Works with TikTok Shop (in-app checkout) or external website. For Thai sellers on TikTok Shop, this is the most powerful objective — the algorithm optimises for people who actually complete a purchase.\n\n**Lead Generation:** In-app form to collect contacts. Good for services, real estate, and education in Thailand. No website needed.\n\n**Website Conversions:** Requires a TikTok Pixel installed on your site. Optimise for any event: Purchase, AddToCart, ViewContent. Needs 50+ conversion events/week to exit the learning phase.",
          th: "**Product Sales:** ปรับแต่งเพื่อการซื้อ ทำงานกับ TikTok Shop (checkout ใน app) หรือเว็บไซต์ภายนอก สำหรับผู้ขายไทยบน TikTok Shop นี่คือ objective ที่ทรงพลังที่สุด algorithm ปรับแต่งเพื่อคนที่ซื้อจริงๆ\n\n**Lead Generation:** ฟอร์มใน app สำหรับเก็บข้อมูลติดต่อ เหมาะสำหรับบริการ อสังหาริมทรัพย์ และการศึกษาในไทย ไม่ต้องมีเว็บไซต์\n\n**Website Conversions:** ต้องติดตั้ง TikTok Pixel บนไซต์ ปรับแต่งสำหรับ event ใดก็ได้: Purchase, AddToCart, ViewContent ต้องมี conversion event 50+ ครั้ง/สัปดาห์เพื่อออกจาก learning phase",
        },
      },
      {
        heading: { en: "Which to pick when", th: "เมื่อใดควรเลือกอะไร" },
        body: {
          en: "**First 30 days, new account, no Pixel data:**\nStart with Video Views + Traffic to generate data and build Custom Audiences. Don't expect direct ROI from these — they're seeding the algorithm.\n\n**50+ purchase events on Pixel:**\nSwitch to Website Conversions or Product Sales. The algorithm now has enough signal to find buyers.\n\n**TikTok Shop seller:**\nAlways use Product Sales objective. The in-app checkout removes friction and the algorithm is tuned for it.\n\n**Service or education business:**\nLead Generation → connect to LINE OA automation for instant Thai follow-up.",
          th: "**30 วันแรก บัญชีใหม่ ไม่มีข้อมูล Pixel:**\nเริ่มด้วย Video Views + Traffic เพื่อสร้างข้อมูลและ Custom Audiences อย่าคาดหวัง ROI โดยตรงจากสิ่งเหล่านี้ — พวกเขากำลังสร้างข้อมูลให้ algorithm\n\n**มี purchase event 50+ ครั้งบน Pixel:**\nเปลี่ยนเป็น Website Conversions หรือ Product Sales ตอนนี้ algorithm มีสัญญาณเพียงพอที่จะหาผู้ซื้อ\n\n**ผู้ขาย TikTok Shop:**\nใช้ Product Sales objective เสมอ checkout ใน app ลดความยุ่งยากและ algorithm ได้รับการปรับแต่งสำหรับมันโดยเฉพาะ\n\n**ธุรกิจบริการหรือการศึกษา:**\nLead Generation → เชื่อมต่อกับ LINE OA automation สำหรับ follow-up ไทยทันที",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: { en: "For a new TikTok account with no Pixel data, what objectives should you start with?", th: "สำหรับบัญชี TikTok ใหม่ที่ไม่มีข้อมูล Pixel ควรเริ่มด้วย objective ใด" },
          options: [
            { en: "Product Sales immediately", th: "Product Sales ทันที" },
            { en: "Video Views + Traffic to seed data", th: "Video Views + Traffic เพื่อสร้างข้อมูล" },
            { en: "Reach only", th: "Reach อย่างเดียว" },
            { en: "Lead Generation", th: "Lead Generation" },
          ],
          correctIndex: 1,
          explanation: {
            en: "New accounts need to build Pixel data and Custom Audiences first. Video Views + Traffic seed the algorithm before switching to conversion objectives.",
            th: "บัญชีใหม่ต้องสร้างข้อมูล Pixel และ Custom Audiences ก่อน Video Views + Traffic สร้างข้อมูลให้ algorithm ก่อนเปลี่ยนเป็น conversion objectives",
          },
        },
        {
          prompt: { en: "For a Thai TikTok Shop seller, which objective is most powerful?", th: "สำหรับผู้ขาย TikTok Shop ไทย objective ใดที่ทรงพลังที่สุด" },
          options: [
            { en: "Traffic", th: "Traffic" },
            { en: "Video Views", th: "Video Views" },
            { en: "Product Sales", th: "Product Sales" },
            { en: "Community Interaction", th: "Community Interaction" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Product Sales with TikTok Shop uses in-app checkout — removing friction and giving the algorithm a direct purchase signal to optimise toward.",
            th: "Product Sales กับ TikTok Shop ใช้ checkout ใน app ลดความยุ่งยากและให้ algorithm มีสัญญาณการซื้อโดยตรงเพื่อปรับแต่ง",
          },
        },
        {
          prompt: { en: "How many weekly conversion events does Website Conversions need to exit the learning phase?", th: "Website Conversions ต้องมี conversion event รายสัปดาห์กี่ครั้งเพื่อออกจาก learning phase" },
          options: [
            { en: "10", th: "10" },
            { en: "25", th: "25" },
            { en: "50", th: "50" },
            { en: "100", th: "100" },
          ],
          correctIndex: 2,
          explanation: {
            en: "50+ conversion events per week is the threshold for stable learning. Below this, the algorithm can't reliably find buyers.",
            th: "50+ conversion event ต่อสัปดาห์คือเกณฑ์สำหรับการเรียนรู้ที่เสถียร ต่ำกว่านี้ algorithm ไม่สามารถหาผู้ซื้อได้อย่างน่าเชื่อถือ",
          },
        },
      ],
    },
  },
  {
    id: "tt-04",
    slug: "targeting",
    track: "tiktok",
    level: "beginner",
    order: 4,
    title: { en: "Audience & Interest Targeting", th: "การกำหนดกลุ่มเป้าหมาย" },
    summary: {
      en: "TikTok's interest graph is different from Meta — broader, signal-driven.",
      th: "Interest graph ของ TikTok ต่างจาก Meta — กว้างกว่าและขับเคลื่อนด้วยสัญญาณ",
    },
    readTimeMin: 7,
    sections: [
      {
        heading: { en: "Interest + Behaviour targeting", th: "การกำหนดเป้าหมายด้วยความสนใจและพฤติกรรม" },
        body: {
          en: "TikTok builds its interest graph from what users actually watch, engage with, and spend time on — not what they declare. This makes it fundamentally different from Meta's interest targeting.\n\n**Interest categories** map to FYP content patterns. \"Beauty & Personal Care > Skincare\" targets users whose FYP is heavy on skincare content, regardless of what they've liked or followed.\n\n**Behaviour targeting** goes deeper: you can target users who have interacted with videos in specific categories in the last 7, 15, or 30 days. This is real-time intent data — more current than Meta's interest signals.",
          th: "TikTok สร้าง interest graph จากสิ่งที่ผู้ใช้ดู engage และใช้เวลาจริงๆ ไม่ใช่สิ่งที่พวกเขาประกาศ ทำให้มันแตกต่างจาก Meta interest targeting โดยพื้นฐาน\n\n**Interest categories** map ไปยังรูปแบบคอนเทนต์ FYP 'Beauty & Personal Care > Skincare' กำหนดเป้าหมายผู้ใช้ที่ FYP เน้นคอนเทนต์สกินแคร์ โดยไม่คำนึงถึงสิ่งที่พวกเขา like หรือ follow\n\n**Behaviour targeting** ลึกกว่า: คุณสามารถกำหนดเป้าหมายผู้ใช้ที่ interact กับวิดีโอในหมวดหมู่เฉพาะในช่วง 7, 15 หรือ 30 วันที่ผ่านมา นี่คือข้อมูล intent แบบ real-time — ปัจจุบันกว่าสัญญาณความสนใจของ Meta",
        },
      },
      {
        heading: { en: "Custom Audiences on TikTok", th: "Custom Audiences บน TikTok" },
        body: {
          en: "Build Custom Audiences from:\n- **Customer file upload:** CRM data (email, phone) — upload and TikTok matches against accounts\n- **Pixel events:** Website visitors, people who added to cart, purchasers\n- **TikTok engagement:** Viewers of your videos, people who visited your profile, followers\n- **TikTok Shop:** Buyers from your TikTok Shop\n\nUse Custom Audiences for retargeting (warm traffic) and as the source for Lookalike Audiences. Your purchase customer list is the most valuable source.",
          th: "สร้าง Custom Audiences จาก:\n- **Customer file upload:** ข้อมูล CRM (อีเมล เบอร์โทร) — อัปโหลดและ TikTok จะจับคู่กับบัญชี\n- **Pixel events:** ผู้เข้าชมเว็บ คนที่เพิ่มลงตะกร้า ผู้ซื้อ\n- **TikTok engagement:** คนดูวิดีโอของคุณ คนเข้าชมโปรไฟล์ ผู้ติดตาม\n- **TikTok Shop:** ผู้ซื้อจาก TikTok Shop ของคุณ\n\nใช้ Custom Audiences สำหรับ retargeting (traffic อุ่น) และเป็น source สำหรับ Lookalike Audiences รายชื่อลูกค้าที่ซื้อแล้วคือ source ที่มีค่าที่สุด",
        },
      },
      {
        heading: { en: "Lookalike Audiences", th: "Lookalike Audiences" },
        body: {
          en: "TikTok builds a new audience statistically similar to your source Custom Audience. Select 1%, 5%, 10%, or 20% similarity — 1% is the tightest match.\n\nIn Thailand, 1% Lookalike ≈ 200,000–300,000 users (TikTok's Thai user base is smaller than Meta's). Use 1–5% for prospecting, 10–20% when you need volume.\n\nBest sources (ranked by signal quality):\n1. Purchase customers\n2. Add-to-cart users (last 30 days)\n3. Video viewers (50%+ completion)\n4. Website visitors",
          th: "TikTok สร้าง audience ใหม่ที่มีสถิติคล้ายกับ Custom Audience ต้นทาง เลือก 1%, 5%, 10% หรือ 20% ความคล้ายคลึง — 1% ตรงที่สุด\n\nในไทย 1% Lookalike ≈ 200,000–300,000 ผู้ใช้ (ฐานผู้ใช้ TikTok ไทยเล็กกว่า Meta) ใช้ 1–5% สำหรับ prospecting และ 10–20% เมื่อต้องการปริมาณ\n\nSource ที่ดีที่สุด (จัดอันดับตามคุณภาพสัญญาณ):\n1. ลูกค้าที่ซื้อแล้ว\n2. ผู้ใช้ที่เพิ่มลงตะกร้า (30 วันล่าสุด)\n3. คนดูวิดีโอ (ดูครบ 50%+)\n4. ผู้เข้าชมเว็บ",
        },
      },
      {
        heading: { en: "Why broad targeting often wins on TikTok", th: "ทำไม broad targeting มักชนะบน TikTok" },
        body: {
          en: "TikTok's FYP algorithm is the world's most powerful content distribution engine. It self-corrects: if your creative resonates with a specific type of person, the algorithm finds more of them — even if you haven't explicitly targeted that group.\n\nMany Thai advertisers run with minimal targeting: age 18–45, Thailand, no interests. The content itself acts as the targeting filter. A skincare video attracts skincare buyers without you needing to select the interest.\n\n**Test both:** Run a manual-interest Ad Group alongside a broad Ad Group with the same creative and budget. Let results speak after 5–7 days. Broad often beats manual on TikTok — the opposite of what works on Meta.",
          th: "FYP algorithm ของ TikTok คือ engine กระจายคอนเทนต์ที่ทรงพลังที่สุดในโลก มันแก้ไขตัวเอง: หาก creative ของคุณสอดคล้องกับคนประเภทหนึ่ง algorithm จะหาคนที่คล้ายกันมากขึ้น แม้ว่าคุณจะไม่ได้ระบุกลุ่มนั้นไว้อย่างชัดเจน\n\nผู้โฆษณาไทยหลายคนรันด้วยการกำหนดเป้าหมายน้อยที่สุด: อายุ 18–45 ประเทศไทย ไม่มีความสนใจ คอนเทนต์นั้นทำหน้าที่เป็นตัวกรองการกำหนดเป้าหมาย วิดีโอสกินแคร์ดึงดูดผู้ซื้อสกินแคร์โดยที่คุณไม่ต้องเลือกความสนใจ\n\n**ทดสอบทั้งสองแบบ:** รัน Ad Group ที่มีความสนใจ manual ควบคู่กับ Ad Group แบบ broad โดยใช้ creative และงบเดียวกัน ปล่อยให้ผลลัพธ์พูดหลังจาก 5–7 วัน broad มักชนะ manual บน TikTok ซึ่งตรงข้ามกับสิ่งที่ได้ผลบน Meta",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each TikTok audience type to how it finds users.",
        th: "จับคู่ประเภท audience TikTok กับวิธีที่ค้นหาผู้ใช้",
      },
      pairs: [
        {
          left: { en: "Interest Targeting", th: "Interest Targeting" },
          right: { en: "Users whose FYP matches content categories", th: "ผู้ใช้ที่ FYP ตรงกับหมวดหมู่คอนเทนต์" },
        },
        {
          left: { en: "Custom Audience", th: "Custom Audience" },
          right: { en: "Built from your own data or TikTok engagement", th: "สร้างจากข้อมูลของคุณหรือ engagement บน TikTok" },
        },
        {
          left: { en: "Lookalike Audience", th: "Lookalike Audience" },
          right: { en: "Users statistically similar to a source list", th: "ผู้ใช้ที่มีสถิติคล้ายกับรายชื่อต้นทาง" },
        },
        {
          left: { en: "Broad Targeting", th: "Broad Targeting" },
          right: { en: "Algorithm finds its own best audience from creative signal", th: "Algorithm หา audience ที่ดีที่สุดจากสัญญาณ creative" },
        },
      ],
    },
    quiz: {
      questions: [
        {
          prompt: { en: "How does TikTok build its interest graph differently from Meta?", th: "TikTok สร้าง interest graph ต่างจาก Meta อย่างไร" },
          options: [
            { en: "From users' stated preferences in their profile", th: "จากความชอบที่ผู้ใช้ระบุในโปรไฟล์" },
            { en: "From what users actually watch and engage with on FYP", th: "จากสิ่งที่ผู้ใช้ดูและ engage บน FYP จริงๆ" },
            { en: "From users' age and gender only", th: "จากอายุและเพศของผู้ใช้เท่านั้น" },
            { en: "From users' location data", th: "จากข้อมูลตำแหน่งของผู้ใช้" },
          ],
          correctIndex: 1,
          explanation: {
            en: "TikTok infers interests from actual viewing and engagement behaviour on the FYP — not declared preferences.",
            th: "TikTok สรุปความสนใจจากพฤติกรรมการดูและ engagement จริงบน FYP ไม่ใช่ความชอบที่ประกาศไว้",
          },
        },
        {
          prompt: { en: "What is the best source for a TikTok Lookalike Audience?", th: "source ที่ดีที่สุดสำหรับ TikTok Lookalike Audience คืออะไร" },
          options: [
            { en: "All TikTok followers", th: "ผู้ติดตาม TikTok ทั้งหมด" },
            { en: "Website visitors (all pages)", th: "ผู้เข้าชมเว็บ (ทุกหน้า)" },
            { en: "Purchase customers", th: "ลูกค้าที่ซื้อแล้ว" },
            { en: "People who viewed any video", th: "คนที่ดูวิดีโอใดๆ" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Purchase customer data is the highest-quality signal for Lookalikes — it represents people who actually bought, not just browsed.",
            th: "ข้อมูลลูกค้าที่ซื้อแล้วคือสัญญาณคุณภาพสูงสุดสำหรับ Lookalikes มันแทนคนที่ซื้อจริง ไม่ใช่แค่เรียกดู",
          },
        },
        {
          prompt: { en: "Why does broad targeting often outperform interest targeting on TikTok?", th: "ทำไม broad targeting มักทำงานได้ดีกว่า interest targeting บน TikTok" },
          options: [
            { en: "TikTok's interest data is inaccurate", th: "ข้อมูลความสนใจของ TikTok ไม่แม่นยำ" },
            { en: "TikTok's FYP algorithm self-corrects using creative signals", th: "FYP algorithm ของ TikTok แก้ไขตัวเองโดยใช้สัญญาณ creative" },
            { en: "Broad targeting has lower CPM", th: "Broad targeting มี CPM ต่ำกว่า" },
            { en: "Interest targeting is only for Instagram", th: "Interest targeting ใช้ได้เฉพาะ Instagram" },
          ],
          correctIndex: 1,
          explanation: {
            en: "The FYP algorithm can find the right audience from creative signals alone. Narrow targeting can restrict this self-correction.",
            th: "FYP algorithm สามารถหา audience ที่ถูกต้องจากสัญญาณ creative เพียงอย่างเดียว การกำหนดเป้าหมายแบบแคบอาจขัดขวางการแก้ไขตัวเองนี้",
          },
        },
      ],
    },
  },
  {
    id: "tt-05",
    slug: "infeed-creation",
    track: "tiktok",
    level: "beginner",
    order: 5,
    title: { en: "In-Feed Ad Creation", th: "สร้างโฆษณา In-Feed" },
    summary: {
      en: "Hook in 1.5s, native feel, captions, CTA card — the In-Feed formula.",
      th: "Hook ใน 1.5 วินาที ต้องรู้สึกเป็นธรรมชาติ คำบรรยายและการ์ด CTA — สูตรของ In-Feed",
    },
    readTimeMin: 9,
    sections: [
      {
        heading: { en: "Hook in 1.5 seconds", th: "Hook ใน 1.5 วินาที" },
        body: {
          en: "Eye-tracking studies show that the decision to skip happens within 1.5 seconds of a video starting. Your first frame must trigger one of:\n\n**Visual surprise:** Something you didn't expect — an unusual colour, unexpected movement, a product reveal mid-action.\n\n**Human face + emotion:** TikTok's algorithm specifically boosts videos that show faces. A Thai face with a genuine reaction beats stock footage every time.\n\n**A problem stated as text:** Burn a problem on screen in the first second. `ผิวมันจนแต่งหน้าไม่ติด?` (Oily skin that won't hold makeup?) — if they have that problem, they stop scrolling.\n\nWhat to avoid: logo reveals, slow pans, silent openers with no text.",
          th: "การศึกษา eye-tracking แสดงว่าการตัดสินใจ skip เกิดขึ้นภายใน 1.5 วินาทีหลังเริ่มวิดีโอ เฟรมแรกของคุณต้องกระตุ้นอย่างใดอย่างหนึ่ง:\n\n**ความประหลาดใจทางภาพ:** บางอย่างที่ไม่คาดคิด สีผิดปกติ การเคลื่อนไหวที่ไม่คาดคิด การเปิดเผยสินค้ากลางการกระทำ\n\n**ใบหน้ามนุษย์ + อารมณ์:** algorithm ของ TikTok โดยเฉพาะ boost วิดีโอที่แสดงใบหน้า ใบหน้าไทยที่มีปฏิกิริยาจริงๆ ชนะ stock footage ทุกครั้ง\n\n**ปัญหาที่ระบุเป็นข้อความ:** เขียนปัญหาบนหน้าจอในวินาทีแรก `ผิวมันจนแต่งหน้าไม่ติด?` หากพวกเขามีปัญหานั้น พวกเขาจะหยุดเลื่อน\n\nสิ่งที่ควรหลีกเลี่ยง: การแสดงโลโก้ การ pan ช้า การเปิดเงียบโดยไม่มีข้อความ",
        },
      },
      {
        heading: { en: "Native feel is everything", th: "ความรู้สึกเป็นธรรมชาติคือทุกอย่าง" },
        body: {
          en: "Polished corporate ads get skipped on TikTok. The platform rewards content that looks organic. To get native feel:\n\n- **Handheld camera:** Slight shake is fine. Perfect stabilisation looks like an ad.\n- **Natural lighting:** Avoid studio lighting. Thai outdoor natural light or ring-light-at-home works well.\n- **Text overlay in TikTok font stack:** Use the in-app editor or match the visual style.\n- **Trending sound:** Use a track from the Commercial Music Library that fits the current Thai trend cycle. Check weekly — sounds cycle fast.\n- **Imperfect audio:** Professional voice-over kills authenticity. A real Thai voice, slightly imperfect, converts better.\n\nRule of thumb: if your video could have been posted by a real creator sharing something genuinely useful or entertaining, it will perform. If it looks like a brand paid someone, it won't.",
          th: "โฆษณาองค์กรที่ขัดเกลาแล้วจะถูก skip บน TikTok แพลตฟอร์มให้รางวัลกับคอนเทนต์ที่ดูเป็นธรรมชาติ เพื่อให้ได้ความรู้สึกเป็น native:\n\n- **กล้องถือมือ:** ความสั่นเล็กน้อยเป็นที่ยอมรับ การ stabilisation ที่สมบูรณ์แบบดูเหมือนโฆษณา\n- **แสงธรรมชาติ:** หลีกเลี่ยงแสงในสตูดิโอ แสงธรรมชาติกลางแจ้งไทยหรือ ring light ที่บ้านใช้ได้ดี\n- **Text overlay ในรูปแบบอักษร TikTok:** ใช้ editor ใน app หรือจับคู่สไตล์ภาพ\n- **เสียงยอดนิยม:** ใช้เพลงจาก Commercial Music Library ที่เข้ากับวงจรเทรนด์ไทยปัจจุบัน ตรวจสอบทุกสัปดาห์ เสียงเปลี่ยนเร็ว\n- **เสียงที่ไม่สมบูรณ์แบบ:** voice-over มืออาชีพทำลายความเป็นธรรมชาติ เสียงไทยจริงๆ ที่ไม่สมบูรณ์แบบเล็กน้อย convert ได้ดีกว่า\n\nกฎง่ายๆ: หากวิดีโอของคุณสามารถโพสต์โดย creator จริงที่แบ่งปันสิ่งที่มีประโยชน์หรือน่าบันเทิงจริงๆ มันจะทำงานได้ดี หากดูเหมือนแบรนด์จ่ายเงินให้ใคร มันจะไม่ได้ผล",
        },
      },
      {
        heading: { en: "Captions and text overlays", th: "คำบรรยายและ text overlay" },
        body: {
          en: "About 50% of TikTok users watch with sound off in public spaces. Captions and text overlays are essential for these viewers.\n\n**Auto-captions:** TikTok has a built-in auto-caption feature. Enable it in the video editor. Accuracy for Thai is ~85–90% — always review before publishing. Missed tones and slang are common errors.\n\n**Text overlay best practices:**\n- Keep to 1–2 lines per frame\n- Use high-contrast text (white on dark background, or dark on light)\n- Stay in the safe zone: avoid the bottom 20% (CTA button area) and the right edge (icons)\n- Sync text changes with cuts or beats for more dynamic feel",
          th: "ผู้ใช้ TikTok ประมาณ 50% ดูโดยปิดเสียงในพื้นที่สาธารณะ คำบรรยายและ text overlay จำเป็นสำหรับผู้ชมเหล่านี้\n\n**Auto-captions:** TikTok มีฟีเจอร์ auto-caption ในตัว เปิดใช้ใน video editor ความแม่นยำสำหรับภาษาไทย ~85–90% ควรตรวจสอบก่อนเผยแพร่เสมอ ข้อผิดพลาดทั่วไปคือวรรณยุกต์และคำสแลง\n\n**แนวปฏิบัติที่ดีสำหรับ text overlay:**\n- เก็บไว้ที่ 1–2 บรรทัดต่อเฟรม\n- ใช้ข้อความคอนทราสต์สูง (สีขาวบนพื้นหลังมืด หรือสีเข้มบนพื้นสว่าง)\n- อยู่ใน safe zone: หลีกเลี่ยง 20% ด้านล่าง (บริเวณปุ่ม CTA) และขอบขวา (ไอคอน)\n- ซิงค์การเปลี่ยนข้อความกับการตัดหรือจังหวะเพื่อความรู้สึกที่ dynamic มากขึ้น",
        },
      },
      {
        heading: { en: "CTA card options", th: "ตัวเลือกการ์ด CTA" },
        body: {
          en: "TikTok lets you add a call-to-action button that overlays on your video. The button appears at the bottom of the ad.\n\n**Available CTAs (localised Thai options are available):**\n- Shop Now / สั่งซื้อเลย\n- Learn More / เรียนรู้เพิ่มเติม\n- Download / ดาวน์โหลด\n- Sign Up / สมัคร\n- Contact Us / ติดต่อเรา\n\n**Thai e-commerce:** `สั่งซื้อเลย` consistently outperforms `Learn More` for purchase-intent audiences. The button is a free variable — test different labels with the same creative and audience.\n\nThe button destination can be: your website, TikTok Shop, or an app store listing.",
          th: "TikTok ให้คุณเพิ่มปุ่ม call-to-action ที่ overlay บนวิดีโอ ปุ่มจะปรากฏที่ด้านล่างของโฆษณา\n\n**CTA ที่มี (มีตัวเลือกภาษาไทย):**\n- Shop Now / สั่งซื้อเลย\n- Learn More / เรียนรู้เพิ่มเติม\n- Download / ดาวน์โหลด\n- Sign Up / สมัคร\n- Contact Us / ติดต่อเรา\n\n**E-commerce ไทย:** `สั่งซื้อเลย` ทำงานได้ดีกว่า `Learn More` อย่างสม่ำเสมอสำหรับ audience ที่มี intent การซื้อ ปุ่มนี้เป็นตัวแปรฟรี ทดสอบ label ต่างๆ ด้วย creative และ audience เดียวกัน\n\nปลายทางของปุ่มสามารถเป็น: เว็บไซต์ TikTok Shop หรือหน้า app store",
        },
      },
    ],
    scenario: {
      prompt: {
        en: "You're briefing a Thai creator to make an In-Feed ad for a skincare brand targeting women 18–28. Write a 4-point brief covering hook, native feel, caption strategy, and CTA.",
        th: "คุณกำลัง brief creator ไทยให้สร้าง In-Feed ad สำหรับแบรนด์สกินแคร์กำหนดเป้าหมายผู้หญิงอายุ 18–28 เขียน brief 4 ข้อครอบคลุม hook native feel กลยุทธ์คำบรรยาย และ CTA",
      },
      hints: [
        { en: "What problem does this audience have that your product solves?", th: "ปัญหาอะไรที่ audience นี้มีซึ่งสินค้าของคุณแก้ได้?" },
        { en: "How should the creator make this feel like organic content, not an ad?", th: "creator ควรทำให้สิ่งนี้รู้สึกเหมือนคอนเทนต์ organic ไม่ใช่โฆษณาอย่างไร?" },
      ],
      idealAnswer: {
        en: "**Hook (first 1.5 seconds):** Open with a close-up of problem skin + text overlay: 'ผิวมันจนแต่งหน้าไม่ติด? 🤦'. Real face, no studio lighting. Do NOT start with the logo.\n\n**Native feel:** Handheld camera, ring light or natural window light, authentic Thai voice (no voice-over), use a current trending sound from CMF as background, speak conversationally as if sharing with a friend.\n\n**Caption strategy:** Enable auto-captions and review for Thai tone accuracy. Add 2 text overlays: one at 2s showing the problem, one at 8s showing the result. Keep to 1 line each.\n\n**CTA:** End with product held up to camera, burn 'ลด 30% วันนี้เท่านั้น' on screen, and set button to 'สั่งซื้อเลย' pointing to the product page.",
        th: "**Hook (1.5 วินาทีแรก):** เปิดด้วย close-up ผิวที่มีปัญหา + text overlay: 'ผิวมันจนแต่งหน้าไม่ติด? 🤦' ใบหน้าจริง ไม่มีแสงสตูดิโอ อย่าเปิดด้วยโลโก้\n\n**Native feel:** กล้องถือมือ ring light หรือแสงหน้าต่างธรรมชาติ เสียงไทยแท้ (ไม่มี voice-over) ใช้เสียงยอดนิยมปัจจุบันจาก CMF เป็น background พูดแบบสนทนาเหมือนแบ่งปันกับเพื่อน\n\n**กลยุทธ์คำบรรยาย:** เปิด auto-captions และตรวจสอบความแม่นยำของวรรณยุกต์ไทย เพิ่ม text overlay 2 อัน: อันที่ 2 วินาทีแสดงปัญหา อันที่ 8 วินาทีแสดงผลลัพธ์ เก็บไว้ 1 บรรทัดแต่ละอัน\n\n**CTA:** จบด้วยการถือสินค้าขึ้นหน้ากล้อง เผา 'ลด 30% วันนี้เท่านั้น' บนหน้าจอ และตั้งปุ่มเป็น 'สั่งซื้อเลย' ชี้ไปยังหน้าสินค้า",
      },
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What should you always avoid in the first frame of a TikTok ad?", th: "ควรหลีกเลี่ยงอะไรในเฟรมแรกของโฆษณา TikTok เสมอ" },
          options: [
            { en: "Showing a human face", th: "แสดงใบหน้ามนุษย์" },
            { en: "A slow logo reveal", th: "การแสดงโลโก้แบบช้า" },
            { en: "Text overlay", th: "Text overlay" },
            { en: "Natural lighting", th: "แสงธรรมชาติ" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Slow logo reveals are the #1 skip trigger. Start with a hook — a face, a problem statement, or a visual surprise.",
            th: "การแสดงโลโก้แบบช้าคือ skip trigger อันดับ 1 เริ่มด้วย hook — ใบหน้า ปัญหา หรือความประหลาดใจทางภาพ",
          },
        },
        {
          prompt: { en: "What percentage of TikTok users watch with sound off?", th: "ผู้ใช้ TikTok กี่เปอร์เซ็นต์ที่ดูโดยปิดเสียง" },
          options: [
            { en: "10%", th: "10%" },
            { en: "25%", th: "25%" },
            { en: "50%", th: "50%" },
            { en: "80%", th: "80%" },
          ],
          correctIndex: 2,
          explanation: {
            en: "About 50% of TikTok users watch with sound off in public. Captions and text overlays are essential for capturing this audience.",
            th: "ผู้ใช้ TikTok ประมาณ 50% ดูโดยปิดเสียงในที่สาธารณะ คำบรรยายและ text overlay จำเป็นสำหรับดึงดูด audience กลุ่มนี้",
          },
        },
        {
          prompt: { en: "Which CTA performs best for Thai e-commerce In-Feed ads?", th: "CTA ใดให้ผลดีที่สุดสำหรับโฆษณา In-Feed e-commerce ไทย" },
          options: [
            { en: "Learn More", th: "Learn More" },
            { en: "Sign Up", th: "Sign Up" },
            { en: "สั่งซื้อเลย (Shop Now)", th: "สั่งซื้อเลย (Shop Now)" },
            { en: "Download", th: "Download" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Thai-localised CTAs like 'สั่งซื้อเลย' consistently outperform generic English CTAs for purchase-intent audiences in Thailand.",
            th: "CTA ที่แปลเป็นภาษาไทยอย่าง 'สั่งซื้อเลย' ทำงานได้ดีกว่า CTA ภาษาอังกฤษทั่วไปสำหรับ audience ที่มี intent การซื้อในไทยอย่างสม่ำเสมอ",
          },
        },
      ],
    },
  },
  {
    id: "tt-06",
    slug: "pixel-and-smart",
    track: "tiktok",
    level: "advanced",
    order: 6,
    title: { en: "Pixel + Smart Performance", th: "Pixel และ Smart Performance" },
    summary: {
      en: "Events API, Smart Performance Campaigns — when to hand the keys to the algorithm.",
      th: "Events API และ Smart Performance Campaigns — เมื่อไหร่ควรปล่อยให้อัลกอริทึมจัดการเอง",
    },
    readTimeMin: 10,
    sections: [
      {
        heading: { en: "TikTok Pixel setup", th: "การตั้งค่า TikTok Pixel" },
        body: {
          en: "The TikTok Pixel is a JavaScript snippet that fires conversion events from the user's browser to TikTok's servers.\n\n**Installation options:**\n- **Shopify:** Install the TikTok app in the Shopify App Store. 1-click setup, no code required.\n- **WooCommerce:** Install the TikTok for WooCommerce plugin.\n- **Manual:** Add the base code to your site's `<head>` tag, then fire standard events with a custom JS function.\n- **Google Tag Manager:** Add the TikTok Pixel template from the GTM community gallery.\n\n**Required events for e-commerce:** ViewContent, AddToCart, InitiateCheckout, Purchase.\n\n**Test your setup:** Use the TikTok Pixel Helper Chrome extension. Target event Match Quality (EMQ) > 7.0.",
          th: "TikTok Pixel คือ JavaScript snippet ที่ยิง conversion event จากเบราว์เซอร์ของผู้ใช้ไปยังเซิร์ฟเวอร์ของ TikTok\n\n**ตัวเลือกการติดตั้ง:**\n- **Shopify:** ติดตั้ง TikTok app ใน Shopify App Store ตั้งค่า 1 คลิก ไม่ต้องเขียน code\n- **WooCommerce:** ติดตั้ง plugin TikTok for WooCommerce\n- **Manual:** เพิ่ม base code ในแท็ก `<head>` ของไซต์ แล้วยิง standard event ด้วย JS function ที่กำหนดเอง\n- **Google Tag Manager:** เพิ่ม TikTok Pixel template จาก GTM community gallery\n\n**Events จำเป็นสำหรับ e-commerce:** ViewContent, AddToCart, InitiateCheckout, Purchase\n\n**ทดสอบการตั้งค่า:** ใช้ TikTok Pixel Helper Chrome extension ตั้งเป้า Event Match Quality (EMQ) > 7.0",
        },
      },
      {
        heading: { en: "Events API (server-side tracking)", th: "Events API (การติดตามฝั่งเซิร์ฟเวอร์)" },
        body: {
          en: "TikTok Events API is the server-side equivalent of the Pixel. Your server sends conversion events directly to TikTok's endpoint — bypassing the browser and any client-side tracking restrictions.\n\n**Why it matters in Thailand:** iOS ATT opt-out rates in Thailand run 40–60%. That's a significant chunk of iPhone purchase data your Pixel alone won't capture.\n\n**Setup:** TikTok provides REST API documentation. Send events with these parameters:\n- `event` — event name (Purchase, AddToCart)\n- `event_time` — Unix timestamp\n- `user` — hashed email, phone, IP, user agent\n- `properties` — value, currency (THB), content_id\n\n**Deduplication:** Use the same `event_id` in both Pixel and Events API calls for the same event.",
          th: "TikTok Events API คือเทียบเท่าฝั่งเซิร์ฟเวอร์ของ Pixel เซิร์ฟเวอร์ของคุณส่ง conversion event ตรงไปยัง endpoint ของ TikTok โดยข้ามเบราว์เซอร์และข้อจำกัดการติดตามฝั่ง client ใดๆ\n\n**ทำไมถึงสำคัญในไทย:** อัตราการปฏิเสธ iOS ATT ในไทยอยู่ที่ 40–60% นั่นคือ iPhone purchase data จำนวนมากที่ Pixel เพียงอย่างเดียวไม่สามารถดึงได้\n\n**การตั้งค่า:** TikTok ให้ REST API documentation ส่ง event ด้วย parameters เหล่านี้:\n- `event` — ชื่อ event (Purchase, AddToCart)\n- `event_time` — Unix timestamp\n- `user` — อีเมล โทรศัพท์ IP user agent แบบ hash\n- `properties` — มูลค่า สกุลเงิน (THB) content_id\n\n**Deduplication:** ใช้ `event_id` เดียวกันทั้งใน Pixel และ Events API call สำหรับ event เดียวกัน",
        },
      },
      {
        heading: { en: "Smart Performance Campaigns (SPC)", th: "Smart Performance Campaigns (SPC)" },
        body: {
          en: "SPC is TikTok's fully automated campaign mode — the equivalent of Meta's Advantage+ Shopping. You provide creative assets; TikTok handles everything else: targeting, bidding, placement, and creative combination.\n\n**Requirements to run SPC:**\n- TikTok Pixel installed with at least 50 Purchase events\n- 3–10 video creatives uploaded\n- Product catalogue connected (for e-commerce)\n\n**What SPC does:**\nIt cycles through your creative variations, finds the best audience automatically, and adjusts bidding in real-time. Much lower setup overhead than manual campaigns at scale.",
          th: "SPC คือโหมดแคมเปญอัตโนมัติเต็มรูปแบบของ TikTok เทียบเท่า Advantage+ Shopping ของ Meta คุณให้ creative assets TikTok จัดการส่วนที่เหลือทั้งหมด: การกำหนดเป้าหมาย การประมูล placement และการผสม creative\n\n**ข้อกำหนดในการรัน SPC:**\n- ติดตั้ง TikTok Pixel พร้อม Purchase event อย่างน้อย 50 ครั้ง\n- อัปโหลด creative วิดีโอ 3–10 ชิ้น\n- เชื่อมต่อ product catalogue (สำหรับ e-commerce)\n\n**สิ่งที่ SPC ทำ:**\nมันหมุนผ่าน creative variation ของคุณ หา audience ที่ดีที่สุดโดยอัตโนมัติ และปรับการประมูลแบบ real-time ค่าใช้จ่ายในการตั้งค่าต่ำกว่าแคมเปญ manual มากในระดับ scale",
        },
      },
      {
        heading: { en: "SPC vs manual — when to use which", th: "SPC vs manual — เมื่อใดควรใช้อะไร" },
        body: {
          en: "**Use manual campaigns when:**\n- Testing new creative hooks or formats\n- Working with a new audience segment you want to understand\n- Running controlled experiments with specific variables\n- Account is new with less than 50 Purchase events\n\n**Use SPC when:**\n- You have proven creatives with demonstrated ROAS\n- You want to maximise volume without micromanaging\n- Account has 100+ weekly Purchase events for strong algorithm signal\n- You're scaling a product that's already working\n\nThink of SPC as the autopilot you turn on after you know the destination and have a working flight plan. You still need to feed it new creative regularly — SPC experiences creative fatigue faster than manual campaigns.",
          th: "**ใช้แคมเปญ manual เมื่อ:**\n- ทดสอบ creative hook หรือฟอร์แมตใหม่\n- ทำงานกับ audience segment ใหม่ที่ต้องการเข้าใจ\n- รันการทดลองที่ควบคุมด้วยตัวแปรเฉพาะ\n- บัญชีใหม่ที่มี Purchase event น้อยกว่า 50 ครั้ง\n\n**ใช้ SPC เมื่อ:**\n- มี creative ที่พิสูจน์แล้วด้วย ROAS ที่แสดงให้เห็น\n- ต้องการเพิ่ม volume สูงสุดโดยไม่ต้องจัดการรายละเอียดมาก\n- บัญชีมี Purchase event รายสัปดาห์ 100+ ครั้งสำหรับสัญญาณ algorithm ที่แข็งแกร่ง\n- กำลัง scale สินค้าที่ทำงานได้ดีอยู่แล้ว\n\nคิดว่า SPC เป็น autopilot ที่คุณเปิดหลังจากรู้ปลายทางและมีแผนบินที่ใช้การได้แล้ว คุณยังต้องป้อน creative ใหม่เป็นประจำ SPC เกิด creative fatigue เร็วกว่าแคมเปญ manual",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: { en: "How many Purchase events does TikTok Pixel need before you can run SPC effectively?", th: "TikTok Pixel ต้องมี Purchase event กี่ครั้งก่อนที่จะรัน SPC ได้อย่างมีประสิทธิภาพ" },
          options: [
            { en: "10", th: "10" },
            { en: "25", th: "25" },
            { en: "50", th: "50" },
            { en: "500", th: "500" },
          ],
          correctIndex: 2,
          explanation: {
            en: "SPC requires at least 50 Purchase events on Pixel to have enough signal to optimise. Below this, use manual campaigns.",
            th: "SPC ต้องการ Purchase event อย่างน้อย 50 ครั้งบน Pixel เพื่อมีสัญญาณเพียงพอในการปรับแต่ง ต่ำกว่านี้ให้ใช้แคมเปญ manual",
          },
        },
        {
          prompt: { en: "Why is the Events API especially important for Thai advertisers?", th: "ทำไม Events API จึงสำคัญเป็นพิเศษสำหรับผู้โฆษณาไทย" },
          options: [
            { en: "Thai mobile connections are too slow for Pixel", th: "การเชื่อมต่อมือถือไทยช้าเกินไปสำหรับ Pixel" },
            { en: "iOS ATT opt-out rates in Thailand are 40–60%, losing Pixel data for many iPhone users", th: "อัตราการปฏิเสธ iOS ATT ในไทยอยู่ที่ 40–60% ทำให้สูญเสียข้อมูล Pixel สำหรับผู้ใช้ iPhone จำนวนมาก" },
            { en: "TikTok Pixel is not available in Thailand", th: "TikTok Pixel ไม่มีให้ใช้งานในไทย" },
            { en: "Thai users don't use iPhones", th: "ผู้ใช้ไทยไม่ใช้ iPhone" },
          ],
          correctIndex: 1,
          explanation: {
            en: "With 40–60% iOS ATT opt-outs, a significant portion of purchase data is invisible to the Pixel. Events API captures this server-side.",
            th: "เมื่อมีการปฏิเสธ iOS ATT 40–60% ข้อมูลการซื้อจำนวนมากไม่สามารถมองเห็นได้โดย Pixel Events API ดึงข้อมูลนี้ฝั่งเซิร์ฟเวอร์",
          },
        },
        {
          prompt: { en: "When is SPC NOT the right choice?", th: "เมื่อใดที่ SPC ไม่ใช่ตัวเลือกที่ถูกต้อง" },
          options: [
            { en: "When you have 200+ weekly purchases", th: "เมื่อมีการซื้อรายสัปดาห์ 200+ ครั้ง" },
            { en: "When you want to scale a proven product", th: "เมื่อต้องการ scale สินค้าที่พิสูจน์แล้ว" },
            { en: "When you're testing new creative hooks with a new account", th: "เมื่อทดสอบ creative hook ใหม่กับบัญชีใหม่" },
            { en: "When you have 10+ creatives to rotate", th: "เมื่อมี creative 10+ ชิ้นที่จะหมุน" },
          ],
          correctIndex: 2,
          explanation: {
            en: "SPC needs proven creative and sufficient Pixel data. For testing and new accounts, use manual campaigns where you can control variables.",
            th: "SPC ต้องการ creative ที่พิสูจน์แล้วและข้อมูล Pixel เพียงพอ สำหรับการทดสอบและบัญชีใหม่ ให้ใช้แคมเปญ manual ที่สามารถควบคุมตัวแปรได้",
          },
        },
      ],
    },
  },
  {
    id: "tt-07",
    slug: "thailand-genz",
    track: "tiktok",
    level: "advanced",
    order: 7,
    title: { en: "Thailand Playbook: Gen Z, TikTok Shop, hashtags", th: "เพลย์บุ๊กไทย: Gen Z, TikTok Shop, แฮชแท็ก" },
    summary: {
      en: "Thai Gen Z patterns, TikTok Shop ad integration, Thai hashtag strategy.",
      th: "พฤติกรรม Gen Z ไทย การยิงร่วมกับ TikTok Shop และกลยุทธ์แฮชแท็กภาษาไทย",
    },
    readTimeMin: 11,
    thailandFocus: true,
    sections: [
      {
        heading: { en: "Thai Gen Z on TikTok", th: "Gen Z ไทยบน TikTok" },
        body: {
          en: "Thailand has 40M+ TikTok users. Gen Z (18–24) accounts for ~45% of active Thai users — the most commercially active demographic.\n\n**Buying triggers for Thai Gen Z:**\n- **Peer proof (สังคม):** \"เพื่อนใช้แล้วดี\" (Friend tried it and it's great). Seeing a peer endorse something carries more weight than any ad.\n- **Value for money (ความคุ้ม):** \"คุ้มมาก\" is a viral phrase. Thai Gen Z are price-sensitive but will buy premium if the value case is clear.\n- **Authenticity (ความจริงใจ):** \"ไม่ได้แต่งหน้า จริงๆ แบบนี้เลย\" (No makeup, this is what it's actually like). Unfiltered before/afters outperform studio shots.\n\n**What Gen Z skips:**\nPolished brand films, formal language, celebrity endorsements from older demographics, long text copy.",
          th: "ไทยมีผู้ใช้ TikTok 40 ล้านคน+ Gen Z (18–24) คิดเป็น ~45% ของผู้ใช้ไทยที่ active — demographic ที่มีกิจกรรมเชิงพาณิชย์มากที่สุด\n\n**trigger การซื้อสำหรับ Gen Z ไทย:**\n- **Peer proof (สังคม):** \"เพื่อนใช้แล้วดี\" การเห็นเพื่อนรับรองบางอย่างมีน้ำหนักมากกว่าโฆษณาใดๆ\n- **ความคุ้มค่า (ความคุ้ม):** \"คุ้มมาก\" คือวลีไวรัล Gen Z ไทยไวต่อราคาแต่จะซื้อพรีเมียมหากกรณีความคุ้มค่าชัดเจน\n- **ความจริงใจ (ความจริงใจ):** \"ไม่ได้แต่งหน้า จริงๆ แบบนี้เลย\" before/after ที่ไม่ผ่านการแต่งภาพทำงานได้ดีกว่าภาพในสตูดิโอ\n\n**สิ่งที่ Gen Z skip:**\nฟิล์มแบรนด์ที่ขัดเกลาแล้ว ภาษาทางการ การรับรองจากดาราของ demographic ที่แก่กว่า และข้อความยาว",
        },
      },
      {
        heading: { en: "TikTok Shop ad integration", th: "การเชื่อมต่อโฆษณากับ TikTok Shop" },
        body: {
          en: "Thailand is one of Southeast Asia's fastest-growing TikTok Shop markets. The in-app shopping experience reduces friction dramatically — users browse, see a product video, tap the bag icon, and check out without leaving TikTok.\n\n**Video Shopping Ads (VSA):** Tag up to 20 products in a video. When viewers tap the product tag, they go directly to the TikTok Shop product page. Use Product Sales objective. Best for: product demos, unboxings, and tutorials.\n\n**Live Shopping Ads:** Boost a live stream with paid traffic. Viewers can purchase directly during the live session. Thai Shoppers who discover via Live have 2–3x higher average order value than feed shoppers.\n\n**LIVE Ads:** Specifically designed to drive traffic to your Live stream. Schedule these 30 minutes before you go live for maximum viewership at stream start.",
          th: "ไทยคือหนึ่งในตลาด TikTok Shop ที่เติบโตเร็วที่สุดในเอเชียตะวันออกเฉียงใต้ ประสบการณ์การช้อปปิ้งใน app ลดความยุ่งยากอย่างมาก ผู้ใช้ browse เห็นวิดีโอสินค้า แตะไอคอนกระเป๋า และ checkout โดยไม่ต้องออกจาก TikTok\n\n**Video Shopping Ads (VSA):** แท็กสินค้าสูงสุด 20 ชิ้นในวิดีโอ เมื่อผู้ชมแตะแท็กสินค้า พวกเขาจะไปยังหน้าสินค้า TikTok Shop โดยตรง ใช้ Product Sales objective เหมาะสำหรับ: demo สินค้า unboxing และ tutorial\n\n**Live Shopping Ads:** เพิ่ม traffic ให้ live stream ด้วยโฆษณา ผู้ชมสามารถซื้อได้โดยตรงระหว่าง live session ผู้ซื้อไทยที่ค้นพบผ่าน Live มีมูลค่าออเดอร์เฉลี่ยสูงกว่านักช้อปแบบ feed 2–3 เท่า\n\n**LIVE Ads:** ออกแบบมาโดยเฉพาะเพื่อดึง traffic ไปยัง Live stream ตั้งเวลาโฆษณาเหล่านี้ 30 นาทีก่อน go live เพื่อยอดผู้ชมสูงสุดเมื่อเริ่มสตรีม",
        },
      },
      {
        heading: { en: "Thai hashtag strategy", th: "กลยุทธ์แฮชแท็กภาษาไทย" },
        body: {
          en: "Hashtags on TikTok serve two functions: algorithm categorisation and community discovery. For Thai content, mixing Thai and English hashtags is more effective than either alone.\n\n**Top-performing Thai hashtag buckets:**\n- **Category:** `#ครีมบำรุงผิว` `#สกินแคร์` `#ผิวสวย` (product category in Thai)\n- **Social proof:** `#รีวิว` `#ทดสอบจริง` `#ใช้แล้วดี` (review signals)\n- **Trend entry:** `#เทรนด์TikTok` `#ไวรัล` `#fyp` (reach boosters)\n- **Localisation:** `#ของดีในไทย` `#คนไทย` (Thai market signals)\n\n**Optimal count:** 5–7 hashtags per video. Mix: 2 category + 2 social proof + 1 trending + 1 brand hashtag.\n\nAvoid hashtag stuffing (20+ tags) — it signals spam and tanks reach. TikTok's algorithm can categorise your video from content alone; hashtags are a hint, not a lever.",
          th: "แฮชแท็กบน TikTok มีสองหน้าที่: การจัดหมวดหมู่ algorithm และการค้นพบของชุมชน สำหรับคอนเทนต์ไทย การผสมแฮชแท็กไทยและอังกฤษมีประสิทธิภาพมากกว่าการใช้ภาษาเดียว\n\n**กลุ่มแฮชแท็กไทยที่ให้ผลดีที่สุด:**\n- **หมวดหมู่:** `#ครีมบำรุงผิว` `#สกินแคร์` `#ผิวสวย` (หมวดหมู่สินค้าเป็นภาษาไทย)\n- **Social proof:** `#รีวิว` `#ทดสอบจริง` `#ใช้แล้วดี` (สัญญาณรีวิว)\n- **เข้าร่วมเทรนด์:** `#เทรนด์TikTok` `#ไวรัล` `#fyp` (ตัวเพิ่ม reach)\n- **Localisation:** `#ของดีในไทย` `#คนไทย` (สัญญาณตลาดไทย)\n\n**จำนวนที่เหมาะสม:** 5–7 แฮชแท็กต่อวิดีโอ ผสม: 2 หมวดหมู่ + 2 social proof + 1 กำลังเทรนด์ + 1 แฮชแท็กแบรนด์\n\nหลีกเลี่ยงการยัดแฮชแท็ก (20+ tags) มันส่งสัญญาณ spam และทำให้ reach ลดลง algorithm ของ TikTok สามารถจัดหมวดหมู่วิดีโอจากคอนเทนต์เพียงอย่างเดียว แฮชแท็กเป็นแค่คำแนะนำ ไม่ใช่คันโยก",
        },
      },
      {
        heading: { en: "Best ad times for Thailand", th: "เวลาโฆษณาที่ดีที่สุดสำหรับไทย" },
        body: {
          en: "TikTok allows ad scheduling at the Ad Group level. Use it to concentrate spend during high-intent hours.\n\n**Peak Thai TikTok hours:**\n- 19:00–22:00 every day (post-work / evening scroll)\n- 12:00–13:00 (lunch break)\n- Weekend afternoons 14:00–17:00\n\n**Lower-ROI windows to consider excluding:**\n- 06:00–08:00 (morning commute — feeds are saturated and attention is split)\n- 02:00–06:00 (except for 11.11 / mega campaign midnight launches)\n\n**Note:** Ad scheduling works best with sufficient budget. If you have ฿300/day, let the algorithm run all hours — scheduling will restrict delivery too much. Use scheduling at ฿1,000+/day.",
          th: "TikTok อนุญาตให้ตั้งเวลาโฆษณาที่ระดับ Ad Group ใช้เพื่อรวม spend ในช่วงที่มี intent สูง\n\n**ช่วงเวลา TikTok ไทยที่ peak:**\n- 19:00–22:00 ทุกวัน (หลังงาน / เลื่อน feed ยามเย็น)\n- 12:00–13:00 (พักกลางวัน)\n- บ่ายวันหยุดสุดสัปดาห์ 14:00–17:00\n\n**ช่วงเวลา ROI ต่ำที่ควรพิจารณายกเว้น:**\n- 06:00–08:00 (ช่วงเดินทางตอนเช้า feed อิ่มตัวและความสนใจถูกแบ่ง)\n- 02:00–06:00 (ยกเว้น 11.11 / การเปิดตัวแคมเปญใหญ่เที่ยงคืน)\n\n**หมายเหตุ:** การตั้งเวลาโฆษณาทำงานได้ดีที่สุดเมื่อมีงบพอเพียง หากมี ฿300/วัน ให้ algorithm รันตลอดทุกชั่วโมง การตั้งเวลาจะจำกัด delivery มากเกินไป ใช้การตั้งเวลาเมื่อมีงบ ฿1,000+/วัน",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each Thai Gen Z buying trigger to the content approach that activates it.",
        th: "จับคู่ buying trigger ของ Gen Z ไทยกับแนวทาง content ที่กระตุ้นมัน",
      },
      pairs: [
        {
          left: { en: "Peer proof (สังคม)", th: "Peer proof (สังคม)" },
          right: { en: "Creator-style UGC with a 'my friend told me' angle", th: "UGC สไตล์ creator ในมุม 'เพื่อนบอกมา'" },
        },
        {
          left: { en: "Value for money (ความคุ้ม)", th: "Value for money (ความคุ้ม)" },
          right: { en: "Price comparison or cost-per-use breakdown", th: "การเปรียบราคาหรือต้นทุนต่อการใช้" },
        },
        {
          left: { en: "Authenticity (ความจริงใจ)", th: "Authenticity (ความจริงใจ)" },
          right: { en: "No-filter before/after with real Thai skin", th: "before/after ไม่มีฟิลเตอร์กับผิวไทยจริง" },
        },
        {
          left: { en: "FOMO (ความเกรงกลัวที่จะพลาด)", th: "FOMO (ความเกรงกลัวที่จะพลาด)" },
          right: { en: "Limited stock + countdown timer on-screen", th: "สต็อกจำกัด + นับถอยหลังบนหน้าจอ" },
        },
      ],
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What type of TikTok content best activates peer proof for Thai Gen Z?", th: "คอนเทนต์ TikTok ประเภทใดกระตุ้น peer proof สำหรับ Gen Z ไทยได้ดีที่สุด" },
          options: [
            { en: "Celebrity endorsement films", th: "ฟิล์มรับรองจากดารา" },
            { en: "UGC-style videos with a 'my friend told me' angle", th: "วิดีโอสไตล์ UGC ในมุม 'เพื่อนบอกมา'" },
            { en: "Professionally produced brand films", th: "ฟิล์มแบรนด์ที่ผลิตอย่างมืออาชีพ" },
            { en: "Static image carousels", th: "carousel รูปภาพนิ่ง" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Thai Gen Z values peer endorsement above celebrity. Creator-style UGC with authentic Thai voices converts better than polished brand content.",
            th: "Gen Z ไทยให้คุณค่ากับการรับรองจากเพื่อนมากกว่าดารา UGC สไตล์ creator ที่มีเสียงไทยแท้ convert ได้ดีกว่าคอนเทนต์แบรนด์ที่ขัดเกลา",
          },
        },
        {
          prompt: { en: "What is the optimal number of hashtags per TikTok video in Thailand?", th: "จำนวนแฮชแท็กที่เหมาะสมต่อวิดีโอ TikTok ในไทยคือเท่าไหร่" },
          options: [
            { en: "1–2", th: "1–2" },
            { en: "5–7", th: "5–7" },
            { en: "15–20", th: "15–20" },
            { en: "30+", th: "30+" },
          ],
          correctIndex: 1,
          explanation: {
            en: "5–7 hashtags is the sweet spot. Mix category + social proof + trending. Hashtag stuffing (20+) signals spam and reduces reach.",
            th: "5–7 แฮชแท็กคือจุดที่เหมาะสม ผสมหมวดหมู่ + social proof + กำลังเทรนด์ การยัดแฮชแท็ก (20+) ส่งสัญญาณ spam และลด reach",
          },
        },
        {
          prompt: { en: "What is the peak TikTok engagement window for Thailand?", th: "ช่วงเวลา peak engagement TikTok ของไทยคือช่วงใด" },
          options: [
            { en: "06:00–09:00", th: "06:00–09:00" },
            { en: "10:00–12:00", th: "10:00–12:00" },
            { en: "19:00–22:00", th: "19:00–22:00" },
            { en: "00:00–03:00", th: "00:00–03:00" },
          ],
          correctIndex: 2,
          explanation: {
            en: "19:00–22:00 is the primary peak for Thai TikTok — post-work evening scroll. This is when ad scheduling delivers the best ROI.",
            th: "19:00–22:00 คือช่วง peak หลักของ TikTok ไทย เลื่อน feed ยามเย็นหลังงาน นี่คือเวลาที่การตั้งเวลาโฆษณาให้ ROI ดีที่สุด",
          },
        },
      ],
    },
  },
];
