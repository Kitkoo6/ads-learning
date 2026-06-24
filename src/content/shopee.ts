import type { Lesson } from "./schema";

export const shopeeLessons: Lesson[] = [
  {
    id: "sp-01",
    slug: "seller-centre",
    track: "shopee",
    level: "beginner",
    order: 1,
    title: { en: "Shopee Seller Centre", th: "Shopee Seller Centre" },
    summary: {
      en: "Navigate the Seller Centre, find the ads dashboard, set up payment.",
      th: "ใช้งาน Seller Centre ค้นหาแดชบอร์ดโฆษณา และตั้งค่าการชำระเงิน",
    },
    readTimeMin: 5,
    sections: [
      {
        heading: { en: "Seller Centre navigation", th: "การนำทาง Seller Centre" },
        body: {
          en: "Shopee Seller Centre (seller.shopee.co.th) is your command centre for everything seller-related. Key sections:\n\n- **My Products:** Add, edit, and manage your product listings\n- **Orders:** View and fulfil customer orders\n- **Finance:** Track payouts, seller vouchers, and balance\n- **Marketing Centre:** All advertising tools live here\n- **Shopee Academy:** Free training courses for sellers (recommended for beginners)\n- **Shop Profile:** Customise your shop banner, bio, and categories\n\nSpend 30 minutes clicking through every section before running your first ad — understanding the full interface prevents costly mistakes.",
          th: "Shopee Seller Centre (seller.shopee.co.th) คือศูนย์บัญชาการสำหรับทุกอย่างที่เกี่ยวกับผู้ขาย ส่วนหลัก:\n\n- **My Products:** เพิ่ม แก้ไข และจัดการรายการสินค้า\n- **Orders:** ดูและจัดการออเดอร์ลูกค้า\n- **Finance:** ติดตามการจ่ายเงิน voucher ผู้ขาย และยอดคงเหลือ\n- **Marketing Centre:** เครื่องมือโฆษณาทั้งหมดอยู่ที่นี่\n- **Shopee Academy:** หลักสูตรฝึกอบรมฟรีสำหรับผู้ขาย (แนะนำสำหรับผู้เริ่มต้น)\n- **Shop Profile:** ปรับแต่งแบนเนอร์ร้านค้า bio และหมวดหมู่\n\nใช้เวลา 30 นาทีคลิกผ่านทุกส่วนก่อนรันโฆษณาแรก การเข้าใจอินเทอร์เฟซทั้งหมดป้องกันความผิดพลาดที่มีค่าใช้จ่ายสูง",
        },
      },
      {
        heading: { en: "Shopee Ads dashboard overview", th: "ภาพรวมแดชบอร์ด Shopee Ads" },
        body: {
          en: "Access ads from **Marketing Centre → Shopee Ads**. You'll see three main ad types:\n\n**Search Ads:** Your product appears when shoppers search by keyword. High intent, paid per click (CPC).\n\n**Discovery Ads:** Your product appears in browse surfaces — category pages, homepage, 'You might also like'. Lower intent, broader reach.\n\n**Boost:** A simple per-product quick-boost. Not keyword-based — Shopee decides where to show it. Good for beginners testing basic visibility.\n\nFor serious advertising, focus on Search Ads first, then layer in Discovery Ads once you understand your keyword performance.",
          th: "เข้าถึงโฆษณาจาก **Marketing Centre → Shopee Ads** จะเห็นโฆษณา 3 ประเภทหลัก:\n\n**Search Ads:** สินค้าของคุณปรากฏเมื่อผู้ซื้อค้นหาด้วยคีย์เวิร์ด intent สูง จ่ายต่อคลิก (CPC)\n\n**Discovery Ads:** สินค้าปรากฏในพื้นที่ browse — หน้าหมวดหมู่ หน้าหลัก 'สินค้าที่คุณอาจชอบ' intent ต่ำกว่า reach กว้างกว่า\n\n**Boost:** การ boost ด่วนต่อสินค้า ไม่ใช่แบบ keyword Shopee ตัดสินใจแสดงที่ไหน ดีสำหรับผู้เริ่มต้นที่ทดสอบการมองเห็นเบื้องต้น\n\nสำหรับการโฆษณาจริงจัง ให้เน้น Search Ads ก่อน แล้วค่อยเพิ่ม Discovery Ads เมื่อเข้าใจประสิทธิภาพคีย์เวิร์ดแล้ว",
        },
      },
      {
        heading: { en: "Budget setup and payment", th: "ตั้งค่างบประมาณและการชำระเงิน" },
        body: {
          en: "Shopee Ads runs on a pre-paid Ads Credit wallet. You top up first, then spend.\n\n**How to top up:**\nMarketing Centre → Shopee Ads → Ads Credit → Top Up\n\n**Payment methods for Thai sellers:**\n- PromptPay (instant, recommended)\n- Credit/debit card (Visa, Mastercard)\n- Shopee Pay balance\n\n**Minimum top-up:** ฿100. Credits expire in **180 days** — don't top up more than you'll spend in 6 months.\n\n**Start small:** Begin at ฿100–200/day per campaign while you learn keyword performance. Scale after 2 weeks of data. A common beginner mistake is setting a high budget before knowing which keywords convert.",
          th: "Shopee Ads ทำงานบน wallet Ads Credit แบบ pre-paid คุณต้องเติมเงินก่อนแล้วค่อยใช้จ่าย\n\n**วิธีเติมเงิน:**\nMarketing Centre → Shopee Ads → Ads Credit → เติมเงิน\n\n**วิธีชำระเงินสำหรับผู้ขายไทย:**\n- PromptPay (ทันที แนะนำ)\n- บัตรเครดิต/เดบิต (Visa, Mastercard)\n- ยอดเงิน Shopee Pay\n\n**เติมเงินขั้นต่ำ:** ฿100 เครดิตหมดอายุใน **180 วัน** อย่าเติมมากกว่าที่จะใช้ใน 6 เดือน\n\n**เริ่มต้นเล็กๆ:** เริ่มที่ ฿100–200/วันต่อแคมเปญขณะเรียนรู้ประสิทธิภาพคีย์เวิร์ด Scale หลังจากมีข้อมูล 2 สัปดาห์ ความผิดพลาดทั่วไปของผู้เริ่มต้นคือตั้งงบสูงก่อนรู้ว่าคีย์เวิร์ดใด convert",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: { en: "Where do you find Shopee's advertising tools within Seller Centre?", th: "คุณหาเครื่องมือโฆษณาของ Shopee ได้ที่ไหนใน Seller Centre" },
          options: [
            { en: "My Products", th: "My Products" },
            { en: "Finance", th: "Finance" },
            { en: "Marketing Centre → Shopee Ads", th: "Marketing Centre → Shopee Ads" },
            { en: "Shopee Academy", th: "Shopee Academy" },
          ],
          correctIndex: 2,
          explanation: {
            en: "All Shopee advertising tools are under Marketing Centre → Shopee Ads. This is where you manage Search Ads, Discovery Ads, and Boost.",
            th: "เครื่องมือโฆษณา Shopee ทั้งหมดอยู่ภายใต้ Marketing Centre → Shopee Ads ที่นี่คุณจัดการ Search Ads, Discovery Ads และ Boost",
          },
        },
        {
          prompt: { en: "How long do Shopee Ads Credits remain valid before expiring?", th: "Shopee Ads Credits มีอายุใช้งานนานแค่ไหนก่อนหมดอายุ" },
          options: [
            { en: "30 days", th: "30 วัน" },
            { en: "90 days", th: "90 วัน" },
            { en: "180 days", th: "180 วัน" },
            { en: "365 days", th: "365 วัน" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Shopee Ads Credits expire after 180 days. Don't top up more than you'll use in 6 months.",
            th: "Shopee Ads Credits หมดอายุหลังจาก 180 วัน อย่าเติมเงินมากกว่าที่จะใช้ใน 6 เดือน",
          },
        },
        {
          prompt: { en: "Which ad type shows your product when a shopper searches by keyword?", th: "โฆษณาประเภทใดแสดงสินค้าของคุณเมื่อผู้ซื้อค้นหาด้วยคีย์เวิร์ด" },
          options: [
            { en: "Discovery Ads", th: "Discovery Ads" },
            { en: "Boost", th: "Boost" },
            { en: "Search Ads", th: "Search Ads" },
            { en: "Live Ads", th: "Live Ads" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Search Ads appear when shoppers type a keyword in Shopee search. High intent — they're actively looking to buy.",
            th: "Search Ads ปรากฏเมื่อผู้ซื้อพิมพ์คีย์เวิร์ดใน Shopee search intent สูง — พวกเขากำลังมองหาจะซื้ออยู่",
          },
        },
      ],
    },
  },
  {
    id: "sp-02",
    slug: "search-vs-display",
    track: "shopee",
    level: "beginner",
    order: 2,
    title: { en: "Search Ads vs Display Ads", th: "Search Ads กับ Display Ads" },
    summary: {
      en: "Intent vs discovery — when to use which, and how they compete for budget.",
      th: "Intent vs discovery — เมื่อไหร่ใช้แบบไหน และทั้งสองแย่งงบกันอย่างไร",
    },
    readTimeMin: 6,
    sections: [
      {
        heading: { en: "Search Ads — intent-driven", th: "Search Ads — ขับเคลื่อนด้วย intent" },
        body: {
          en: "Search Ads appear in Shopee's search results when a user types a specific keyword. The user has declared intent — they're actively looking for something.\n\n**How billing works:** CPC (cost per click). You only pay when someone clicks. Set a maximum bid per keyword; Shopee runs a second-price auction.\n\n**Best for:**\n- Products with established search demand (people know what they want)\n- High-margin products where each click has high conversion value\n- New sellers who want controlled, measurable ad spend\n\n**What it can't do:** Search Ads can't create demand for products people don't know to search for. If you're selling something new to the Thai market, pair with Discovery Ads.",
          th: "Search Ads ปรากฏในผลการค้นหา Shopee เมื่อผู้ใช้พิมพ์คีย์เวิร์ดเฉพาะ ผู้ใช้ประกาศ intent แล้ว พวกเขากำลังมองหาบางอย่างอยู่\n\n**วิธีเรียกเก็บเงิน:** CPC (ค่าต่อคลิก) คุณจ่ายเฉพาะเมื่อมีคนคลิก ตั้งราคาประมูลสูงสุดต่อคีย์เวิร์ด Shopee รัน second-price auction\n\n**เหมาะสำหรับ:**\n- สินค้าที่มีความต้องการค้นหาที่ชัดเจน (คนรู้ว่าต้องการอะไร)\n- สินค้ามาร์จิ้นสูงที่แต่ละคลิกมีมูลค่า conversion สูง\n- ผู้ขายใหม่ที่ต้องการการใช้จ่ายโฆษณาที่ควบคุมและวัดผลได้\n\n**สิ่งที่ทำไม่ได้:** Search Ads ไม่สามารถสร้างความต้องการสำหรับสินค้าที่คนไม่รู้จะค้นหา หากขายสิ่งใหม่ในตลาดไทย ให้ใช้คู่กับ Discovery Ads",
        },
      },
      {
        heading: { en: "Discovery Ads — demand creation", th: "Discovery Ads — สร้างความต้องการ" },
        body: {
          en: "Discovery Ads appear on browse surfaces: category pages, homepage banners, 'You might also like', and product recommendation widgets. Users haven't declared intent — they're exploring.\n\n**How billing works:** CPM (cost per 1,000 impressions) or CPC depending on placement. Generally cheaper per impression than Search Ads.\n\n**Best for:**\n- New product launches where search volume is low\n- Impulse-buy categories (snacks, accessories, novelty items)\n- Seasonal products (Songkran gifts, Chinese New Year)\n- Increasing brand/shop awareness on Shopee\n\n**Limitation:** Lower conversion rate than Search Ads because users aren't in buy-mode.",
          th: "Discovery Ads ปรากฏในพื้นที่ browse: หน้าหมวดหมู่ แบนเนอร์หน้าหลัก 'สินค้าที่คุณอาจชอบ' และ widget แนะนำสินค้า ผู้ใช้ยังไม่ได้ประกาศ intent พวกเขากำลัง explore\n\n**วิธีเรียกเก็บเงิน:** CPM (ค่าต่อ 1,000 impression) หรือ CPC ขึ้นอยู่กับ placement โดยทั่วไปถูกกว่า Search Ads ต่อ impression\n\n**เหมาะสำหรับ:**\n- การเปิดตัวสินค้าใหม่ที่ปริมาณการค้นหาต่ำ\n- หมวดหมู่ที่ซื้อแบบ impulse (ขนม อุปกรณ์เสริม สินค้าแปลกใหม่)\n- สินค้าตามฤดูกาล (ของขวัญสงกรานต์ ตรุษจีน)\n- เพิ่มการรับรู้แบรนด์/ร้านค้าบน Shopee\n\n**ข้อจำกัด:** อัตราการ convert ต่ำกว่า Search Ads เพราะผู้ใช้ยังไม่อยู่ในโหมดซื้อ",
        },
      },
      {
        heading: { en: "Budget allocation strategy", th: "กลยุทธ์การจัดสรรงบ" },
        body: {
          en: "For most Thai Shopee sellers, the right split depends on your product stage:\n\n**Established product (existing search demand):**\n70% Search Ads + 30% Discovery. Lead with intent, support with awareness.\n\n**New product (no search volume yet):**\n40% Search Ads + 60% Discovery. Build awareness first, then capture the demand you create.\n\n**Mega campaign days (11.11, 10.10, 12.12):**\n50% Search + 50% Discovery. On campaign days, browse traffic spikes as shoppers explore deals without a specific keyword. Discovery captures impulse buyers who wouldn't have searched.",
          th: "สำหรับผู้ขาย Shopee ไทยส่วนใหญ่ การแบ่งงบที่ถูกต้องขึ้นอยู่กับระยะของสินค้า:\n\n**สินค้าที่มีอยู่แล้ว (มีความต้องการค้นหา):**\n70% Search Ads + 30% Discovery นำด้วย intent สนับสนุนด้วยการรับรู้\n\n**สินค้าใหม่ (ยังไม่มีปริมาณการค้นหา):**\n40% Search Ads + 60% Discovery สร้างการรับรู้ก่อน แล้วค่อยดักจับความต้องการที่คุณสร้างขึ้น\n\n**วันแคมเปญใหญ่ (11.11, 10.10, 12.12):**\n50% Search + 50% Discovery ในวันแคมเปญ traffic browse เพิ่มสูงขณะนักช้อป explore ดีลโดยไม่มีคีย์เวิร์ดเฉพาะ Discovery ดักจับผู้ซื้อแบบ impulse ที่จะไม่ได้ค้นหา",
        },
      },
    ],
    scenario: {
      prompt: {
        en: "You're launching a new Thai herbal snack brand on Shopee with ฿500 total budget for the first month. No existing search volume. Allocate between Search Ads and Discovery Ads and explain your reasoning.",
        th: "คุณกำลังเปิดตัวแบรนด์ขนมสมุนไพรไทยใหม่บน Shopee โดยมีงบรวม ฿500 สำหรับเดือนแรก ยังไม่มีปริมาณการค้นหา จัดสรรระหว่าง Search Ads และ Discovery Ads พร้อมอธิบายเหตุผล",
      },
      hints: [
        { en: "If no one is searching for your product yet, where do they find it?", th: "หากยังไม่มีใครค้นหาสินค้าของคุณ พวกเขาจะหามันได้จากที่ไหน?" },
        { en: "What do you need to build before Search Ads can work effectively?", th: "คุณต้องสร้างอะไรก่อนที่ Search Ads จะทำงานได้อย่างมีประสิทธิภาพ?" },
      ],
      idealAnswer: {
        en: "Allocation: ฿150 Search Ads (30%) + ฿350 Discovery Ads (70%).\n\nReasoning: A new herbal snack has very low existing search volume in Thailand — most potential buyers don't know to type 'ขนมสมุนไพร' into Shopee search. Discovery Ads (70%) drive awareness across category pages and homepage to introduce the product. The 30% in Search Ads captures anyone already searching related terms (like 'ขนมไทย', 'ขนมสุขภาพ', 'ขนมจากสมุนไพร'). After month 1, check which search terms are converting, then shift budget toward Search to follow the demand the Discovery spend created.",
        th: "การจัดสรร: ฿150 Search Ads (30%) + ฿350 Discovery Ads (70%)\n\nเหตุผล: ขนมสมุนไพรใหม่มีปริมาณการค้นหาที่มีอยู่ต่ำมากในไทย ผู้ซื้อที่มีศักยภาพส่วนใหญ่ไม่รู้ว่าต้องพิมพ์ 'ขนมสมุนไพร' ใน Shopee Discovery Ads (70%) สร้างการรับรู้ผ่านหน้าหมวดหมู่และหน้าหลักเพื่อแนะนำสินค้า 30% ใน Search Ads ดักจับใครก็ตามที่ค้นหาคำที่เกี่ยวข้องอยู่แล้ว (เช่น 'ขนมไทย' 'ขนมสุขภาพ' 'ขนมจากสมุนไพร') หลังเดือนแรก ตรวจสอบว่าคีย์เวิร์ดใด convert แล้วเปลี่ยนงบไปยัง Search เพื่อติดตามความต้องการที่ Discovery spend สร้างขึ้น",
      },
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What is the billing model for Shopee Search Ads?", th: "โมเดลการเรียกเก็บเงินของ Shopee Search Ads คืออะไร" },
          options: [
            { en: "CPM (cost per 1,000 impressions)", th: "CPM (ค่าต่อ 1,000 impression)" },
            { en: "CPA (cost per acquisition)", th: "CPA (ค่าต่อการได้มา)" },
            { en: "CPC (cost per click)", th: "CPC (ค่าต่อคลิก)" },
            { en: "Flat daily fee", th: "ค่าธรรมเนียมรายวันคงที่" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Shopee Search Ads use CPC billing — you only pay when a shopper clicks on your ad in search results.",
            th: "Shopee Search Ads ใช้การเรียกเก็บเงินแบบ CPC คุณจ่ายเฉพาะเมื่อผู้ซื้อคลิกโฆษณาของคุณในผลการค้นหา",
          },
        },
        {
          prompt: { en: "During Shopee mega campaigns (11.11), what budget split is recommended?", th: "ในช่วงแคมเปญใหญ่ Shopee (11.11) ควรแบ่งงบอย่างไร" },
          options: [
            { en: "100% Search Ads", th: "100% Search Ads" },
            { en: "90% Discovery, 10% Search", th: "90% Discovery, 10% Search" },
            { en: "50% Search, 50% Discovery", th: "50% Search, 50% Discovery" },
            { en: "70% Search, 30% Discovery", th: "70% Search, 30% Discovery" },
          ],
          correctIndex: 2,
          explanation: {
            en: "On mega campaign days, browse traffic spikes significantly as shoppers explore deals. A 50/50 split captures both intent-driven and discovery-driven buyers.",
            th: "ในวันแคมเปญใหญ่ traffic browse เพิ่มขึ้นอย่างมากขณะนักช้อป explore ดีล การแบ่ง 50/50 ดักจับผู้ซื้อทั้งแบบ intent-driven และ discovery-driven",
          },
        },
        {
          prompt: { en: "Which ad type is best for a new product with no existing Shopee search volume?", th: "โฆษณาประเภทใดดีที่สุดสำหรับสินค้าใหม่ที่ยังไม่มีปริมาณการค้นหาใน Shopee" },
          options: [
            { en: "Search Ads only", th: "Search Ads เท่านั้น" },
            { en: "Discovery Ads (heavier allocation)", th: "Discovery Ads (จัดสรรมากกว่า)" },
            { en: "Boost only", th: "Boost เท่านั้น" },
            { en: "No ads needed initially", th: "ยังไม่ต้องโฆษณา" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Without search demand, Discovery Ads are essential to introduce the product to Thai Shopee browsers who don't know to search for it.",
            th: "หากไม่มีความต้องการค้นหา Discovery Ads จำเป็นต้องแนะนำสินค้าให้กับผู้ browse Shopee ไทยที่ไม่รู้จะค้นหาอะไร",
          },
        },
      ],
    },
  },
  {
    id: "sp-03",
    slug: "keyword-bidding",
    track: "shopee",
    level: "beginner",
    order: 3,
    title: { en: "Keyword Bidding Basics", th: "พื้นฐานการประมูลคีย์เวิร์ด" },
    summary: {
      en: "Broad, phrase, exact match. Bid floors. The CTR feedback loop.",
      th: "Broad, phrase, exact match ราคาประมูลขั้นต่ำ และวงจร CTR",
    },
    readTimeMin: 7,
    sections: [
      {
        heading: { en: "Keyword match types", th: "ประเภทการจับคู่คีย์เวิร์ด" },
        body: {
          en: "**Broad match:** Your ad shows for searches containing your keyword, plus related searches, synonyms, and misspellings. Maximum reach, least control.\n\nExample: Broad keyword `ครีมกันแดด` might trigger for `กันแดดราคาถูก`, `ครีมบำรุงผิว SPF`, `ป้องกันแดด`.\n\n**Phrase match:** The keyword phrase must appear in the search query, in order.\n\nExample: Phrase keyword `ครีมกันแดด` matches `ครีมกันแดด SPF50` and `ครีมกันแดดราคาถูก` but NOT `กันแดด SPF ครีม` (wrong order).\n\n**Exact match:** Ad shows only for that exact search term. Lowest volume, highest precision and conversion rate.\n\nExample: Exact keyword `ครีมกันแดด SPF50 สำหรับผิวแพ้ง่าย` only matches that exact phrase.\n\n**Strategy:** Start Broad to discover what people actually search for. After 2 weeks, mine your Search Term Report (inside Ads Manager), identify high-converting terms, and add them as Exact match with higher bids.",
          th: "**Broad match:** โฆษณาแสดงสำหรับการค้นหาที่มีคีย์เวิร์ดของคุณ บวกกับการค้นหาที่เกี่ยวข้อง คำพ้องความหมาย และการสะกดผิด reach สูงสุด ควบคุมน้อยที่สุด\n\nตัวอย่าง: คีย์เวิร์ด Broad `ครีมกันแดด` อาจ trigger สำหรับ `กันแดดราคาถูก` `ครีมบำรุงผิว SPF` `ป้องกันแดด`\n\n**Phrase match:** วลีคีย์เวิร์ดต้องปรากฏในคำค้นหา ตามลำดับ\n\nตัวอย่าง: คีย์เวิร์ด Phrase `ครีมกันแดด` จับคู่กับ `ครีมกันแดด SPF50` และ `ครีมกันแดดราคาถูก` แต่ไม่ใช่ `กันแดด SPF ครีม` (ลำดับผิด)\n\n**Exact match:** โฆษณาแสดงเฉพาะสำหรับคำค้นหานั้นพอดี volume ต่ำที่สุด ความแม่นยำและอัตราการ convert สูงสุด\n\nตัวอย่าง: คีย์เวิร์ด Exact `ครีมกันแดด SPF50 สำหรับผิวแพ้ง่าย` จับคู่เฉพาะวลีนั้นพอดี\n\n**กลยุทธ์:** เริ่มด้วย Broad เพื่อค้นพบสิ่งที่คนค้นหาจริงๆ หลังจาก 2 สัปดาห์ ดู Search Term Report (ใน Ads Manager) ระบุคำที่ convert ดี แล้วเพิ่มเป็น Exact match พร้อม bid ที่สูงขึ้น",
        },
      },
      {
        heading: { en: "Bid floors and the auction", th: "ราคาประมูลขั้นต่ำและการประมูล" },
        body: {
          en: "Shopee shows you a **suggested bid** and a **minimum bid** for each keyword. The minimum is the floor — bidding at the floor gets you last position in results.\n\n**How positions work:** Higher bid = higher ad placement = more impressions. But it's not purely price — Shopee also factors in your product's CTR, conversion rate, and listing quality score.\n\n**Getting started:** Bid 20–30% above the suggested bid to secure top-3 positions. After 7 days, check your impression share and adjust.\n\n**During mega campaigns:** Bid floors spike 2–5x normal rates as competitors increase spend. Budget for this in advance — set campaign budgets 3x higher than normal for 11.11 / 12.12.",
          th: "Shopee แสดง **ราคาประมูลที่แนะนำ** และ **ราคาประมูลขั้นต่ำ** สำหรับแต่ละคีย์เวิร์ด ขั้นต่ำคือพื้น การประมูลที่ขั้นต่ำทำให้ได้ตำแหน่งสุดท้ายในผลลัพธ์\n\n**วิธีการทำงานของตำแหน่ง:** bid สูงกว่า = placement โฆษณาสูงกว่า = impression มากกว่า แต่ไม่ใช่ราคาเพียงอย่างเดียว Shopee ยังพิจารณา CTR ของสินค้า อัตราการ convert และคะแนนคุณภาพ listing\n\n**เริ่มต้น:** bid 20–30% เหนือราคาที่แนะนำเพื่อครองตำแหน่ง top-3 หลังจาก 7 วัน ตรวจสอบ impression share ของคุณและปรับ\n\n**ในช่วงแคมเปญใหญ่:** ราคาประมูลขั้นต่ำเพิ่มขึ้น 2–5 เท่าจากปกติเมื่อคู่แข่งเพิ่มการใช้จ่าย วางแผนงบล่วงหน้า ตั้งงบ campaign สูงกว่าปกติ 3 เท่าสำหรับ 11.11 / 12.12",
        },
      },
      {
        heading: { en: "The CTR feedback loop", th: "วงจร CTR" },
        body: {
          en: "Shopee's algorithm factors CTR into ad placement. High CTR → algorithm rewards you with better placement at a lower effective CPC. Low CTR → you pay more for worse positions.\n\nThis creates a loop: your cover image and product title directly affect your ad's cost-efficiency. A beautiful cover image can cut your CPC by 30–40% while improving position.\n\n**The implication:** Fix your listing before increasing your bid. A bad listing with a high bid is expensive and ineffective. A well-optimised listing with a moderate bid outperforms.\n\nCheck CTR in your Search Ads report. Target CTR > 2% for most categories. Below 1% indicates a listing problem, not a bid problem.",
          th: "Algorithm ของ Shopee นำ CTR มาพิจารณา placement โฆษณา CTR สูง → algorithm ให้รางวัลด้วย placement ที่ดีกว่าที่ CPC จริงต่ำกว่า CTR ต่ำ → คุณจ่ายมากขึ้นสำหรับตำแหน่งที่แย่ลง\n\nสิ่งนี้สร้างวงจร: รูปภาพปกและชื่อสินค้าของคุณส่งผลโดยตรงต่อประสิทธิภาพด้านต้นทุนของโฆษณา ภาพปกที่สวยงามสามารถลด CPC ได้ 30–40% พร้อมปรับปรุงตำแหน่ง\n\n**ผลที่ตามมา:** แก้ไข listing ก่อนเพิ่ม bid listing ที่ไม่ดีพร้อม bid สูงเป็นเรื่องแพงและไม่มีประสิทธิภาพ listing ที่ปรับแต่งดีพร้อม bid ปานกลางทำงานได้ดีกว่า\n\nตรวจสอบ CTR ในรายงาน Search Ads ตั้งเป้า CTR > 2% สำหรับหมวดหมู่ส่วนใหญ่ ต่ำกว่า 1% บ่งชี้ปัญหา listing ไม่ใช่ปัญหา bid",
        },
      },
      {
        heading: { en: "Negative keywords", th: "คีย์เวิร์ดเชิงลบ" },
        body: {
          en: "Negative keywords prevent your ad from showing for irrelevant searches. This is budget protection — every irrelevant click is money wasted.\n\n**Common negative keyword examples for Thai sellers:**\n- Premium skincare brand? Add negatives: `ถูก`, `ราคาประหยัด`, `OEM`, `ก็อปปี้`\n- Thai food brand? Add: `ญี่ปุ่น`, `เกาหลี`, `นำเข้า`\n- Kids products? Add: `ผู้ใหญ่`, `ผู้สูงอายุ`\n\n**Where to find negative keywords:** Run Search Ads with Broad match for 2 weeks, then open the Search Term Report. Any term with clicks but zero purchases is a candidate for the negative keyword list.\n\nReview your negative list monthly. Search behaviour shifts — especially after mega campaign periods.",
          th: "คีย์เวิร์ดเชิงลบป้องกันโฆษณาไม่ให้แสดงสำหรับการค้นหาที่ไม่เกี่ยวข้อง นี่คือการป้องกันงบ ทุกคลิกที่ไม่เกี่ยวข้องคือเงินที่สูญเปล่า\n\n**ตัวอย่างคีย์เวิร์ดเชิงลบทั่วไปสำหรับผู้ขายไทย:**\n- แบรนด์สกินแคร์พรีเมียม? เพิ่มคีย์เวิร์ดเชิงลบ: `ถูก` `ราคาประหยัด` `OEM` `ก็อปปี้`\n- แบรนด์อาหารไทย? เพิ่ม: `ญี่ปุ่น` `เกาหลี` `นำเข้า`\n- สินค้าเด็ก? เพิ่ม: `ผู้ใหญ่` `ผู้สูงอายุ`\n\n**วิธีหาคีย์เวิร์ดเชิงลบ:** รัน Search Ads ด้วย Broad match เป็นเวลา 2 สัปดาห์ แล้วเปิด Search Term Report คำใดก็ตามที่มีคลิกแต่ไม่มีการซื้อเลยเป็นผู้สมัครสำหรับรายการคีย์เวิร์ดเชิงลบ\n\nตรวจสอบรายการคีย์เวิร์ดเชิงลบทุกเดือน พฤติกรรมการค้นหาเปลี่ยน โดยเฉพาะหลังช่วงแคมเปญใหญ่",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each keyword match type to its rule for triggering ads.",
        th: "จับคู่ประเภทการจับคู่คีย์เวิร์ดกับกฎสำหรับการ trigger โฆษณา",
      },
      pairs: [
        {
          left: { en: "Broad match", th: "Broad match" },
          right: { en: "Keyword + synonyms + related terms", th: "คีย์เวิร์ด + คำพ้องความหมาย + คำที่เกี่ยวข้อง" },
        },
        {
          left: { en: "Phrase match", th: "Phrase match" },
          right: { en: "Keyword phrase must appear in order", th: "วลีคีย์เวิร์ดต้องปรากฏตามลำดับ" },
        },
        {
          left: { en: "Exact match", th: "Exact match" },
          right: { en: "Ad shows only for that exact search term", th: "โฆษณาแสดงเฉพาะสำหรับคำค้นหานั้นพอดี" },
        },
        {
          left: { en: "Negative keyword", th: "คีย์เวิร์ดเชิงลบ" },
          right: { en: "Blocks ad from showing for this term", th: "บล็อกโฆษณาไม่ให้แสดงสำหรับคำนี้" },
        },
      ],
    },
    quiz: {
      questions: [
        {
          prompt: { en: "You start keyword bidding on Shopee with no data. Which match type should you begin with?", th: "คุณเริ่มประมูลคีย์เวิร์ดบน Shopee โดยไม่มีข้อมูล ควรเริ่มด้วยประเภทการจับคู่ใด" },
          options: [
            { en: "Exact match only", th: "Exact match เท่านั้น" },
            { en: "Phrase match only", th: "Phrase match เท่านั้น" },
            { en: "Broad match to discover search terms", th: "Broad match เพื่อค้นพบคำค้นหา" },
            { en: "Negative keywords first", th: "คีย์เวิร์ดเชิงลบก่อน" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Start Broad to discover what Thai shoppers actually type. After 2 weeks, mine the Search Term Report for exact winners.",
            th: "เริ่มด้วย Broad เพื่อค้นพบสิ่งที่นักช้อปไทยพิมพ์จริงๆ หลังจาก 2 สัปดาห์ ดู Search Term Report เพื่อหาคำที่ชนะแบบ exact",
          },
        },
        {
          prompt: { en: "Your Search Ads CTR is 0.8% and CPC is rising. What is most likely causing this?", th: "CTR ของ Search Ads คุณอยู่ที่ 0.8% และ CPC กำลังเพิ่มขึ้น อะไรที่น่าจะเป็นสาเหตุ" },
          options: [
            { en: "Your bid is too low", th: "bid ของคุณต่ำเกินไป" },
            { en: "Your listing cover image or title needs improvement", th: "รูปภาพปกหรือชื่อสินค้าต้องการปรับปรุง" },
            { en: "Shopee's algorithm is broken", th: "Algorithm ของ Shopee พัง" },
            { en: "You need more negative keywords", th: "คุณต้องการคีย์เวิร์ดเชิงลบมากขึ้น" },
          ],
          correctIndex: 1,
          explanation: {
            en: "CTR below 1% usually signals a listing problem — the cover image or title isn't compelling enough to earn clicks. Fix the listing before raising bids.",
            th: "CTR ต่ำกว่า 1% มักส่งสัญญาณปัญหา listing รูปภาพปกหรือชื่อสินค้าไม่น่าสนใจพอที่จะได้คลิก แก้ไข listing ก่อนเพิ่ม bid",
          },
        },
        {
          prompt: { en: "What should you do with a search term that has 50 clicks and zero purchases?", th: "ควรทำอะไรกับคำค้นหาที่มี 50 คลิกแต่ไม่มีการซื้อ" },
          options: [
            { en: "Increase the bid to get more traffic", th: "เพิ่ม bid เพื่อได้ traffic มากขึ้น" },
            { en: "Add it as a negative keyword", th: "เพิ่มเป็นคีย์เวิร์ดเชิงลบ" },
            { en: "Switch it to exact match", th: "เปลี่ยนเป็น exact match" },
            { en: "Do nothing — it needs more data", th: "ไม่ต้องทำอะไร ต้องการข้อมูลเพิ่มขึ้น" },
          ],
          correctIndex: 1,
          explanation: {
            en: "A term with 50 clicks and zero conversions is wasting budget. Add it as a negative keyword to stop paying for irrelevant traffic.",
            th: "คำที่มี 50 คลิกและไม่มี conversion กำลังเผาผลาญงบ เพิ่มเป็นคีย์เวิร์ดเชิงลบเพื่อหยุดจ่ายสำหรับ traffic ที่ไม่เกี่ยวข้อง",
          },
        },
      ],
    },
  },
  {
    id: "sp-04",
    slug: "listing-optimisation",
    track: "shopee",
    level: "beginner",
    order: 4,
    title: { en: "Product Listing Optimisation", th: "ปรับสินค้าให้ขายดี" },
    summary: {
      en: "Title structure, cover image rules, A+ description — your ad relies on this.",
      th: "โครงสร้างชื่อสินค้า กฎภาพปก คำอธิบายแบบ A+ — โฆษณาขึ้นอยู่กับสิ่งเหล่านี้",
    },
    readTimeMin: 8,
    sections: [
      {
        heading: { en: "Title structure formula", th: "สูตรโครงสร้างชื่อสินค้า" },
        body: {
          en: "Your product title is the most important listing element for both SEO (organic search) and ads (Quality Score). The formula:\n\n**[Brand] + [Product Type] + [Key Feature] + [Size/Variant] + [Secondary Keyword]**\n\nExample: `Cera M ครีมบำรุงผิวหน้า Moisturizer SPF30 50ml ครีมให้ความชุ่มชื้น`\n\n**Rules:**\n- Put the primary keyword in the **first 30 characters** — that's what appears before truncation in search results\n- Include both Thai and English terms where buyers might use either: `กันแดด` AND `Sunscreen`\n- Max title length: 120 characters\n- Avoid: ALL CAPS, excessive punctuation (!!!), irrelevant buzzwords\n- Never include: competitor brand names, prohibited claims ('cure', 'guaranteed results')",
          th: "ชื่อสินค้าของคุณคือองค์ประกอบ listing ที่สำคัญที่สุดทั้งสำหรับ SEO (การค้นหา organic) และโฆษณา (Quality Score) สูตร:\n\n**[แบรนด์] + [ประเภทสินค้า] + [คุณสมบัติหลัก] + [ขนาด/รูปแบบ] + [คีย์เวิร์ดรอง]**\n\nตัวอย่าง: `Cera M ครีมบำรุงผิวหน้า Moisturizer SPF30 50ml ครีมให้ความชุ่มชื้น`\n\n**กฎ:**\n- ใส่คีย์เวิร์ดหลักใน **30 ตัวอักษรแรก** นั่นคือสิ่งที่ปรากฏก่อนการตัดทอนในผลการค้นหา\n- รวมคำทั้งภาษาไทยและภาษาอังกฤษที่ผู้ซื้ออาจใช้: `กันแดด` และ `Sunscreen`\n- ความยาวชื่อสูงสุด: 120 ตัวอักษร\n- หลีกเลี่ยง: ตัวพิมพ์ใหญ่ทั้งหมด เครื่องหมายวรรคตอนมากเกินไป (!!) คำโปรโมตที่ไม่เกี่ยวข้อง\n- ห้าม: ชื่อแบรนด์คู่แข่ง การอ้างสิทธิ์ที่ไม่อนุญาต ('รักษา' 'รับประกันผล')",
        },
      },
      {
        heading: { en: "Cover image rules", th: "กฎภาพปก" },
        body: {
          en: "Shopee requires a **white background** for the first (cover) image. This is mandatory — non-compliant listings get lower placement or removed.\n\n**Cover image requirements:**\n- White background (#FFFFFF), product centred\n- Minimum: 500×500px. Use **2000×2000px** for highest quality\n- 1:1 ratio (square)\n- No watermarks, no promotional text, no collages on the first image\n\n**After the cover image**, you can add lifestyle photos, ingredient callouts, before/after comparisons, size guides, and infographics. These appear in the image carousel.\n\n**Mobile-first test:** 90%+ of Thai Shopee traffic is on mobile. Preview your cover image at 60px width (thumbnail size) to see if it's clear enough at that size. If the product is unrecognisable as a thumbnail, improve the image composition.",
          th: "Shopee กำหนดให้ภาพแรก (ภาพปก) ต้องมี **พื้นหลังสีขาว** นี่เป็นข้อบังคับ listing ที่ไม่เป็นไปตามข้อกำหนดจะได้ placement ต่ำกว่าหรือถูกลบ\n\n**ข้อกำหนดภาพปก:**\n- พื้นหลังสีขาว (#FFFFFF) สินค้าอยู่กึ่งกลาง\n- ขั้นต่ำ: 500×500px ใช้ **2000×2000px** เพื่อคุณภาพสูงสุด\n- อัตราส่วน 1:1 (สี่เหลี่ยมจัตุรัส)\n- ไม่มีลายน้ำ ไม่มีข้อความโปรโมต ไม่มีการตัดปะบนภาพแรก\n\n**หลังภาพปก** คุณสามารถเพิ่มภาพ lifestyle การระบุส่วนผสม การเปรียบเทียบก่อน/หลัง คู่มือขนาด และ infographic ซึ่งปรากฏใน carousel รูปภาพ\n\n**ทดสอบ mobile-first:** Traffic Shopee ไทยกว่า 90%+ อยู่บนมือถือ ดูตัวอย่างภาพปกที่ขนาด 60px (ขนาด thumbnail) เพื่อดูว่าชัดเจนพอในขนาดนั้นไหม หากสินค้าจำไม่ออกในฐานะ thumbnail ให้ปรับปรุงองค์ประกอบภาพ",
        },
      },
      {
        heading: { en: "A+ description (rich content)", th: "คำอธิบาย A+ (rich content)" },
        body: {
          en: "Shopee's product description editor allows rich media: banners, feature grids, comparison tables, FAQ sections, and more. This is what Thai sellers call 'A+ content' (borrowed from Amazon's terminology).\n\n**Why it matters for ads:** Shopee's algorithm factors listing completeness into its Quality Score. Higher Quality Score = lower CPC and better ad placement. A fully filled description is free ad efficiency.\n\n**Must-have sections for Thai listings:**\n- Hero banner (product at its best angle, 800×800px)\n- Feature highlights grid (3–6 key benefits with icons)\n- Usage instructions (Thai buyers read these)\n- FAQ block (handle the 5 most common pre-purchase questions)\n- Trust signals (certifications, awards, batch numbers for cosmetics)\n\nDon't leave empty modules — a half-finished description signals low quality to both the algorithm and the buyer.",
          th: "editor คำอธิบายสินค้าของ Shopee อนุญาต rich media: แบนเนอร์ กริด feature ตารางเปรียบเทียบ ส่วน FAQ และอื่นๆ นี่คือสิ่งที่ผู้ขายไทยเรียกว่า 'A+ content' (ยืมคำศัพท์จาก Amazon)\n\n**ทำไมถึงสำคัญสำหรับโฆษณา:** Algorithm ของ Shopee พิจารณาความสมบูรณ์ของ listing ใน Quality Score Quality Score สูง = CPC ต่ำและ placement โฆษณาดีกว่า การกรอกคำอธิบายครบถ้วนคือประสิทธิภาพโฆษณาฟรี\n\n**ส่วนที่ต้องมีสำหรับ listing ไทย:**\n- Hero banner (สินค้าจากมุมที่ดีที่สุด 800×800px)\n- กริด feature highlights (ประโยชน์หลัก 3–6 ข้อพร้อมไอคอน)\n- คำแนะนำการใช้งาน (ผู้ซื้อไทยอ่านสิ่งเหล่านี้)\n- บล็อก FAQ (ตอบคำถามก่อนซื้อ 5 ข้อที่พบบ่อยที่สุด)\n- สัญญาณความน่าเชื่อถือ (ใบรับรอง รางวัล หมายเลขชุดผลิตภัณฑ์สำหรับเครื่องสำอาง)\n\nอย่าทิ้งโมดูลว่างไว้ คำอธิบายที่ทำไม่เสร็จส่งสัญญาณคุณภาพต่ำทั้งต่อ algorithm และผู้ซื้อ",
        },
      },
      {
        heading: { en: "Reviews and ratings as ad multipliers", th: "รีวิวและคะแนนในฐานะตัวคูณโฆษณา" },
        body: {
          en: "Shopee's algorithm factors your product rating and number of reviews into ad placement ranking. A product with 4.8★ / 500 reviews at a moderate bid will outperform a 3.2★ product at maximum bid.\n\n**The practical rule:** Don't advertise bad listings. Fix product quality, customer service, and fulfilment issues before scaling ad spend. Ad spend amplifies what's already there — good or bad.\n\n**For new listings with no reviews:**\n- Enrol in Shopee's Preferred Seller program (better visibility, official badge)\n- Use Shopee's Request Review feature after every order\n- Offer a small thank-you voucher for next purchase to encourage repeat buyers (high repeat rate signals quality to Shopee's algorithm)\n\n**Responding to negative reviews:** Shopee allows seller replies. A prompt, professional Thai-language reply converts some negative impressions. Ignoring bad reviews is the worst outcome.",
          th: "Algorithm ของ Shopee พิจารณาคะแนนสินค้าและจำนวนรีวิวในการจัดอันดับ placement โฆษณา สินค้าที่ได้ 4.8★ / 500 รีวิวพร้อม bid ปานกลางจะทำงานได้ดีกว่าสินค้า 3.2★ พร้อม bid สูงสุด\n\n**กฎปฏิบัติ:** อย่าโฆษณา listing ที่ไม่ดี แก้ไขปัญหาคุณภาพสินค้า การบริการลูกค้า และการจัดส่งก่อน scale การใช้จ่ายโฆษณา การใช้จ่ายโฆษณาขยายสิ่งที่มีอยู่แล้ว ไม่ว่าจะดีหรือไม่ดี\n\n**สำหรับ listing ใหม่ที่ยังไม่มีรีวิว:**\n- ลงทะเบียนในโปรแกรม Preferred Seller ของ Shopee (การมองเห็นที่ดีขึ้น บัดจ์อย่างเป็นทางการ)\n- ใช้ฟีเจอร์ Request Review ของ Shopee หลังทุกออเดอร์\n- เสนอ voucher ขอบคุณเล็กน้อยสำหรับการซื้อครั้งถัดไปเพื่อกระตุ้นผู้ซื้อซ้ำ (อัตราการซื้อซ้ำสูงส่งสัญญาณคุณภาพให้ algorithm ของ Shopee)\n\n**ตอบกลับรีวิวเชิงลบ:** Shopee อนุญาตให้ผู้ขายตอบกลับ การตอบกลับที่รวดเร็วและเป็นมืออาชีพเป็นภาษาไทยเปลี่ยนแปลงความประทับใจเชิงลบบางส่วน การเพิกเฉยรีวิวแย่คือผลลัพธ์ที่แย่ที่สุด",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each listing element to what it primarily optimises.",
        th: "จับคู่องค์ประกอบ listing กับสิ่งที่มันปรับแต่งเป็นหลัก",
      },
      pairs: [
        {
          left: { en: "Title (first 30 chars)", th: "ชื่อ (30 ตัวอักษรแรก)" },
          right: { en: "Search ranking and CTR in results", th: "อันดับการค้นหาและ CTR ในผลลัพธ์" },
        },
        {
          left: { en: "Cover image (white BG)", th: "ภาพปก (พื้นหลังขาว)" },
          right: { en: "Click-through rate at thumbnail size", th: "CTR ที่ขนาด thumbnail" },
        },
        {
          left: { en: "A+ description", th: "คำอธิบาย A+" },
          right: { en: "Listing Quality Score (lowers ad CPC)", th: "Listing Quality Score (ลด CPC โฆษณา)" },
        },
        {
          left: { en: "Reviews & rating", th: "รีวิวและคะแนน" },
          right: { en: "Ad placement ranking and conversion rate", th: "อันดับ placement โฆษณาและอัตราการ convert" },
        },
      ],
    },
    quiz: {
      questions: [
        {
          prompt: { en: "What background colour does Shopee require for the first product image?", th: "Shopee กำหนดให้ภาพสินค้าแรกต้องมีพื้นหลังสีอะไร" },
          options: [
            { en: "Any colour the brand chooses", th: "สีใดก็ได้ที่แบรนด์เลือก" },
            { en: "Black", th: "ดำ" },
            { en: "White (#FFFFFF)", th: "ขาว (#FFFFFF)" },
            { en: "Grey", th: "เทา" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Shopee mandates a white background for the first product image. Non-compliant listings get lower placement or may be removed.",
            th: "Shopee กำหนดให้พื้นหลังสีขาวสำหรับภาพสินค้าแรก listing ที่ไม่เป็นไปตามข้อกำหนดจะได้ placement ต่ำกว่าหรืออาจถูกลบ",
          },
        },
        {
          prompt: { en: "Where in the title should your primary keyword appear for maximum search visibility?", th: "คีย์เวิร์ดหลักควรปรากฏที่ไหนในชื่อเพื่อการมองเห็นในการค้นหาสูงสุด" },
          options: [
            { en: "At the very end of the title", th: "ที่ส่วนท้ายของชื่อ" },
            { en: "In the middle of the title", th: "ตรงกลางของชื่อ" },
            { en: "In the first 30 characters", th: "ใน 30 ตัวอักษรแรก" },
            { en: "It doesn't matter where in the title", th: "ไม่สำคัญว่าจะอยู่ที่ไหนในชื่อ" },
          ],
          correctIndex: 2,
          explanation: {
            en: "The first 30 characters appear before truncation in search results. Putting your keyword here maximises visibility when titles are cut off.",
            th: "30 ตัวอักษรแรกปรากฏก่อนการตัดทอนในผลการค้นหา การใส่คีย์เวิร์ดที่นี่เพิ่มการมองเห็นสูงสุดเมื่อชื่อถูกตัด",
          },
        },
        {
          prompt: { en: "A product with 3.2★ and a high bid vs. 4.8★ and a moderate bid — which wins ad placement?", th: "สินค้าที่ได้ 3.2★ พร้อม bid สูง กับ 4.8★ พร้อม bid ปานกลาง — อันไหนชนะ placement โฆษณา" },
          options: [
            { en: "3.2★ always wins with high bid", th: "3.2★ ชนะเสมอด้วย bid สูง" },
            { en: "4.8★ wins — rating is factored into placement", th: "4.8★ ชนะ คะแนนถูกนำมาพิจารณาใน placement" },
            { en: "Both rank equally — only bid matters", th: "ทั้งคู่ rank เท่ากัน bid เท่านั้นที่สำคัญ" },
            { en: "Shopee randomly assigns placement", th: "Shopee กำหนด placement แบบสุ่ม" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Shopee's algorithm factors product rating and reviews into ad placement. A 4.8★ product with a moderate bid typically outperforms a low-rated competitor at max bid.",
            th: "Algorithm ของ Shopee พิจารณาคะแนนสินค้าและรีวิวใน placement โฆษณา สินค้า 4.8★ พร้อม bid ปานกลางมักทำงานได้ดีกว่าคู่แข่งที่ได้คะแนนต่ำแม้ใช้ bid สูงสุด",
          },
        },
      ],
    },
  },
  {
    id: "sp-05",
    slug: "affiliate-and-flash",
    track: "shopee",
    level: "advanced",
    order: 5,
    title: { en: "Affiliate Program & Flash Sale Ads", th: "Affiliate และ Flash Sale Ads" },
    summary: {
      en: "Compounding distribution: affiliates, flash slots, scheduled boosts.",
      th: "การกระจายแบบทบต้น: affiliate, ช่อง flash sale, การตั้งเวลา",
    },
    readTimeMin: 9,
    sections: [
      {
        heading: { en: "Shopee Affiliate Program", th: "โปรแกรม Affiliate ของ Shopee" },
        body: {
          en: "Shopee Affiliate connects your products with creators, bloggers, and publishers who earn commission when their audience buys your product. You only pay on conversion — zero upfront cost.\n\n**How to set it up:**\n1) Go to Marketing Centre → Affiliate Programme\n2) Enable affiliate for your shop and select which products to include\n3) Set commission rate (%) per product or per shop\n\n**Commission rate strategy:**\n- Minimum to attract creators: 5%\n- Competitive rate for beauty/fashion: 8–12%\n- High-velocity products that benefit from volume: 15–20%\n\n**Why it works in Thailand:** Thai TikTok and YouTube creators actively search for Shopee affiliate products with high commissions. A high commission rate puts your product on their radar without you paying for the outreach. You pay only when they sell.",
          th: "Shopee Affiliate เชื่อมต่อสินค้าของคุณกับ creator บล็อกเกอร์ และผู้เผยแพร่ที่ได้รับค่าคอมมิชชันเมื่อผู้ชมซื้อสินค้าของคุณ คุณจ่ายเฉพาะเมื่อ convert — ไม่มีค่าใช้จ่ายล่วงหน้า\n\n**วิธีตั้งค่า:**\n1) ไปที่ Marketing Centre → Affiliate Programme\n2) เปิดใช้งาน affiliate สำหรับร้านค้าและเลือกสินค้าที่จะรวม\n3) ตั้งอัตราค่าคอมมิชชัน (%) ต่อสินค้าหรือต่อร้านค้า\n\n**กลยุทธ์อัตราค่าคอมมิชชัน:**\n- ขั้นต่ำเพื่อดึงดูด creator: 5%\n- อัตราที่แข่งขันได้สำหรับความงาม/แฟชั่น: 8–12%\n- สินค้าที่ได้ประโยชน์จากปริมาณสูง: 15–20%\n\n**ทำไมถึงได้ผลในไทย:** Creator TikTok และ YouTube ไทยค้นหาสินค้า affiliate Shopee ที่มีค่าคอมมิชชันสูงอย่างแข็งขัน อัตราค่าคอมมิชชันสูงทำให้สินค้าของคุณอยู่ในเรดาร์ของพวกเขาโดยที่คุณไม่ต้องจ่ายสำหรับการติดต่อ คุณจ่ายเฉพาะเมื่อพวกเขาขายได้",
        },
      },
      {
        heading: { en: "Flash Sale slots", th: "ช่อง Flash Sale" },
        body: {
          en: "Shopee runs Daily Flash Sales and category flash sales that give massive organic reach during the sale window (typically 2 hours). Shoppers browse the flash sale tab looking for deals — your product gets exposure to motivated buyers without needing them to search.\n\n**Types of flash sale slots:**\n- **Daily Flash Sale:** Apply for individual product slots. Available daily. Slot fees: ฿50–200 per slot depending on category.\n- **Category Flash Sale:** Higher traffic, higher competition. Often requires maintaining a minimum product rating and number of reviews.\n- **Branded Flash Sale (11.11/12.12):** Premium slots on mega campaign days. Fees can reach ฿5,000+ per slot but volume returns 10–20x normal daily sales.\n\n**How to apply:** Marketing Centre → Flash Sale → Apply for available slots. Some slots are first-come-first-served; others require minimum rating thresholds.",
          th: "Shopee รัน Daily Flash Sale และ flash sale ตามหมวดหมู่ที่ให้ reach organic มากในช่วงเวลาขาย (โดยทั่วไป 2 ชั่วโมง) นักช้อป browse แท็บ flash sale เพื่อหาดีล สินค้าของคุณได้รับ exposure กับผู้ซื้อที่มีแรงจูงใจโดยไม่ต้องให้พวกเขาค้นหา\n\n**ประเภทช่อง Flash Sale:**\n- **Daily Flash Sale:** สมัครสำหรับช่องสินค้าแต่ละชิ้น มีทุกวัน ค่าช่อง: ฿50–200 ต่อช่องขึ้นอยู่กับหมวดหมู่\n- **Category Flash Sale:** Traffic สูงกว่า การแข่งขันสูงกว่า มักต้องรักษาคะแนนสินค้าขั้นต่ำและจำนวนรีวิว\n- **Branded Flash Sale (11.11/12.12):** ช่องพรีเมียมในวันแคมเปญใหญ่ ค่าใช้จ่ายสูงถึง ฿5,000+ ต่อช่อง แต่ปริมาณยอดขายตอบแทนกลับมา 10–20 เท่าของยอดขายรายวันปกติ\n\n**วิธีสมัคร:** Marketing Centre → Flash Sale → สมัครช่องที่ว่างอยู่ บางช่องมาก่อนได้ก่อน บางช่องต้องการคะแนนขั้นต่ำ",
        },
      },
      {
        heading: { en: "Scheduled boost strategy", th: "กลยุทธ์การ Boost ตามเวลา" },
        body: {
          en: "Shopee Boost (per-product quick-boost) allows you to schedule start and end times. Timing your Boost around Flash Sale windows creates a compounding effect.\n\n**The strategy:**\n1) You secure a Flash Sale slot for Product A, 14:00–16:00\n2) Set Boost to start at **13:00** — 1 hour before the Flash Sale\n3) The Boost brings traffic → product gets clicks and purchases → Shopee's algorithm reads increasing sales velocity → bumps product ranking in search\n4) When Flash Sale goes live at 14:00, the product is already ranking higher from the Boost-driven velocity\n5) Keep Boost running until **17:00** — 1 hour after Flash Sale ends, to capture lingering high-intent shoppers\n\nThis approach consistently outperforms either Boost or Flash Sale alone by 30–50%.",
          th: "Shopee Boost (การ boost ด่วนต่อสินค้า) ให้คุณตั้งเวลาเริ่มและสิ้นสุด การตั้งเวลา Boost รอบช่วงเวลา Flash Sale สร้างผลทบต้น\n\n**กลยุทธ์:**\n1) คุณได้ช่อง Flash Sale สำหรับสินค้า A เวลา 14:00–16:00\n2) ตั้ง Boost ให้เริ่มที่ **13:00** — 1 ชั่วโมงก่อน Flash Sale\n3) Boost นำ traffic มา → สินค้าได้คลิกและการซื้อ → algorithm ของ Shopee อ่านความเร็วยอดขายที่เพิ่มขึ้น → ดัน ranking สินค้าในการค้นหาขึ้น\n4) เมื่อ Flash Sale เริ่มที่ 14:00 สินค้า ranking สูงกว่าอยู่แล้วจากความเร็วที่ Boost ขับเคลื่อน\n5) รัน Boost ต่อไปจนถึง **17:00** — 1 ชั่วโมงหลัง Flash Sale สิ้นสุด เพื่อดักจับนักช้อปที่มี intent สูงที่ยังอยู่\n\nวิธีนี้ทำงานได้ดีกว่า Boost หรือ Flash Sale อย่างเดียวอย่างสม่ำเสมอ 30–50%",
        },
      },
      {
        heading: { en: "Compounding distribution — stacking all four layers", th: "การกระจายแบบทบต้น — ซ้อนทุกสี่ชั้น" },
        body: {
          en: "The maximum distribution approach stacks four channels simultaneously:\n\n**1) Search Ads** — captures active buyers\n**2) Boost** — timed around Flash Sale, lifts algorithm ranking\n**3) Flash Sale slot** — massive organic reach during the 2-hour window\n**4) Affiliate commission** — creator-driven traffic arriving from TikTok and YouTube\n\nA product with all four active during a campaign like 10.10 can achieve 20–50x its normal daily sales volume.\n\n**Budget the voucher cost:** Most peak campaigns involve Shopee vouchers (seller-funded discounts). Factor this into your margin before running all four channels — otherwise a high-volume day can generate revenue with no profit.",
          th: "วิธีการกระจายสูงสุดซ้อนสี่ช่องทางพร้อมกัน:\n\n**1) Search Ads** — ดักจับผู้ซื้อที่ active\n**2) Boost** — ตั้งเวลารอบ Flash Sale เพื่อยก ranking algorithm\n**3) ช่อง Flash Sale** — reach organic มากในช่วงเวลา 2 ชั่วโมง\n**4) ค่าคอมมิชชัน Affiliate** — traffic จาก creator ที่มาจาก TikTok และ YouTube\n\nสินค้าที่เปิดใช้งานทั้งสี่ชั้นในช่วงแคมเปญเช่น 10.10 สามารถบรรลุปริมาณยอดขายรายวัน 20–50 เท่าของปกติ\n\n**คิดงบสำหรับค่า voucher:** แคมเปญ peak ส่วนใหญ่เกี่ยวข้องกับ Shopee voucher (ส่วนลดที่ผู้ขายออก) คำนวณสิ่งนี้ในมาร์จิ้นก่อนรันสี่ช่องทาง มิฉะนั้นวันที่มีปริมาณสูงอาจสร้างรายได้โดยไม่มีกำไร",
        },
      },
    ],
    quiz: {
      questions: [
        {
          prompt: { en: "What is the key advantage of the Shopee Affiliate Program for sellers?", th: "ข้อดีหลักของ Shopee Affiliate Program สำหรับผู้ขายคืออะไร" },
          options: [
            { en: "Free ad placements on the homepage", th: "placement โฆษณาฟรีบนหน้าหลัก" },
            { en: "You only pay commission when a creator actually drives a sale", th: "คุณจ่ายค่าคอมมิชชันเฉพาะเมื่อ creator ทำยอดขายจริงๆ" },
            { en: "Guaranteed 1,000 daily visitors", th: "ผู้เข้าชม 1,000 คนต่อวันที่รับประกัน" },
            { en: "Free flash sale slots", th: "ช่อง flash sale ฟรี" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Affiliate is performance-based: zero upfront cost, you pay only on conversion. This makes it risk-free distribution at scale.",
            th: "Affiliate ขึ้นอยู่กับประสิทธิภาพ: ไม่มีค่าใช้จ่ายล่วงหน้า คุณจ่ายเฉพาะเมื่อ convert สิ่งนี้ทำให้เป็นการกระจายที่ปราศจากความเสี่ยงในระดับ scale",
          },
        },
        {
          prompt: { en: "When should you start a Boost relative to a Flash Sale slot?", th: "ควรเริ่ม Boost เมื่อใดเทียบกับช่อง Flash Sale" },
          options: [
            { en: "At the same time as the Flash Sale", th: "พร้อมกับ Flash Sale" },
            { en: "1 hour before the Flash Sale starts", th: "1 ชั่วโมงก่อน Flash Sale เริ่ม" },
            { en: "1 day before the Flash Sale", th: "1 วันก่อน Flash Sale" },
            { en: "After the Flash Sale ends", th: "หลัง Flash Sale สิ้นสุด" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Starting Boost 1 hour before Flash Sale drives early traffic → Shopee's algorithm reads rising sales velocity → bumps product ranking before the flash sale crowd arrives.",
            th: "การเริ่ม Boost 1 ชั่วโมงก่อน Flash Sale ดึง traffic มาก่อน → algorithm ของ Shopee อ่านความเร็วยอดขายที่เพิ่มขึ้น → ดัน ranking สินค้าก่อนที่ฝูงชน flash sale จะมาถึง",
          },
        },
        {
          prompt: { en: "What is the most important financial check before stacking all 4 distribution layers on a mega campaign day?", th: "การตรวจสอบทางการเงินที่สำคัญที่สุดก่อนซ้อนทั้ง 4 ช่องทางการกระจายในวันแคมเปญใหญ่คืออะไร" },
          options: [
            { en: "Check your follower count", th: "ตรวจสอบจำนวนผู้ติดตาม" },
            { en: "Verify your Shopee store rating", th: "ยืนยันคะแนนร้านค้า Shopee" },
            { en: "Factor in the voucher cost to ensure you're not generating revenue with no profit", th: "คำนวณต้นทุน voucher เพื่อให้แน่ใจว่าไม่สร้างรายได้โดยไม่มีกำไร" },
            { en: "Confirm your Pixel is working", th: "ยืนยันว่า Pixel ทำงานอยู่" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Seller vouchers on mega campaign days are effectively price cuts from your margin. High volume with no profit margin left is a loss, not a win.",
            th: "Voucher ผู้ขายในวันแคมเปญใหญ่คือการลดราคาจากมาร์จิ้นของคุณจริงๆ ปริมาณสูงโดยไม่มีมาร์จิ้นกำไรเหลือคือขาดทุน ไม่ใช่ชนะ",
          },
        },
      ],
    },
  },
  {
    id: "sp-06",
    slug: "thailand-mega-campaigns",
    track: "shopee",
    level: "advanced",
    order: 6,
    title: { en: "Thailand Playbook: 10.10, 11.11, 12.12 & Shopee Live", th: "เพลย์บุ๊กไทย: 10.10, 11.11, 12.12 และ Shopee Live" },
    summary: {
      en: "Mega campaign rhythm, Thai buyer patterns, Shopee Live ad amplification.",
      th: "จังหวะแคมเปญใหญ่ พฤติกรรมผู้ซื้อไทย และการดัน Shopee Live ด้วยโฆษณา",
    },
    readTimeMin: 11,
    thailandFocus: true,
    sections: [
      {
        heading: { en: "The mega campaign calendar", th: "ปฏิทินแคมเปญใหญ่" },
        body: {
          en: "Shopee Thailand runs a rhythm of double-digit-date mega campaigns throughout the year. Each has a distinct product category mix and buyer profile:\n\n**9.9 (September 9):** Growing fast. Fashion, electronics, back-to-school. Start preparing 4 weeks out.\n\n**10.10 (October 10):** 1-day spike. Beauty, home & living, lifestyle. Strong for mid-range price point products.\n\n**11.11 (November 11):** The biggest shopping day in Southeast Asia. All categories spike. Begin preparation 6–8 weeks out. Campaign day lasts 24 hours but 70% of volume happens at midnight (00:00–02:00) and lunch (12:00–13:00).\n\n**12.12 (December 12):** Second-biggest event. Often used to clear inventory for year-end. Beauty, gifting, and electronics perform well. Buyers are more price-sensitive than on 11.11.",
          th: "Shopee ไทยรันจังหวะแคมเปญใหญ่ตามวันที่สองหลักตลอดทั้งปี แต่ละแคมเปญมีประเภทสินค้าและโปรไฟล์ผู้ซื้อที่แตกต่างกัน:\n\n**9.9 (9 กันยายน):** เติบโตเร็ว แฟชั่น อิเล็กทรอนิกส์ กลับโรงเรียน เริ่มเตรียมตัว 4 สัปดาห์ล่วงหน้า\n\n**10.10 (10 ตุลาคม):** พุ่งขึ้น 1 วัน ความงาม บ้านและการใช้ชีวิต ไลฟ์สไตล์ ได้ผลดีสำหรับสินค้าช่วงราคากลาง\n\n**11.11 (11 พฤศจิกายน):** วันช้อปปิ้งที่ใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้ ทุกหมวดหมู่พุ่งขึ้น เริ่มเตรียมตัว 6–8 สัปดาห์ล่วงหน้า วันแคมเปญกินเวลา 24 ชั่วโมงแต่ 70% ของปริมาณเกิดขึ้นตอนเที่ยงคืน (00:00–02:00) และมื้อเที่ยง (12:00–13:00)\n\n**12.12 (12 ธันวาคม):** อีเวนต์ใหญ่อันดับสอง มักใช้เพื่อระบายสต็อกสำหรับสิ้นปี ความงาม ของขวัญ และอิเล็กทรอนิกส์ทำงานได้ดี ผู้ซื้อไวต่อราคามากกว่า 11.11",
        },
      },
      {
        heading: { en: "Thai buyer patterns during mega campaigns", th: "พฤติกรรมผู้ซื้อไทยในช่วงแคมเปญใหญ่" },
        body: {
          en: "Understanding Thai shopper behaviour during peak events lets you time your ads and inventory precisely:\n\n**Midnight spike (00:00–02:00):** Thai shoppers set alarms and wait up for the campaign launch. The first hour after midnight on 11.11 generates more orders than most normal full days. Have maximum budget live at 23:50 the night before.\n\n**Cart pre-loading:** Thai buyers add items to cart days or weeks before the campaign. They're waiting to apply the best voucher on campaign day. **Retarget these cart abandoners** with a specific ad starting 48 hours before the event.\n\n**Voucher hunting:** Thai buyers are experts at stacking vouchers (Shopee vouchers + payment method vouchers + seller vouchers). Products that allow multiple voucher stacking see higher conversion.\n\n**Mobile-first:** 92%+ of Shopee Thailand purchases during mega campaigns are on mobile. Your creatives and landing experience must be mobile-optimised.",
          th: "การเข้าใจพฤติกรรมนักช้อปไทยในช่วง event peak ให้คุณตั้งเวลาโฆษณาและสินค้าคงคลังได้แม่นยำ:\n\n**พุ่งขึ้นตอนเที่ยงคืน (00:00–02:00):** นักช้อปไทยตั้งนาฬิกาปลุกและรอตื่นเพื่อการเปิดตัวแคมเปญ ชั่วโมงแรกหลังเที่ยงคืนของ 11.11 สร้างออเดอร์มากกว่าวันปกติส่วนใหญ่ทั้งวัน มีงบสูงสุดที่เปิดใช้งานเวลา 23:50 คืนก่อน\n\n**การโหลดตะกร้าล่วงหน้า:** ผู้ซื้อไทยเพิ่มสินค้าลงตะกร้าวัน/สัปดาห์ก่อนแคมเปญ พวกเขารอใช้ voucher ที่ดีที่สุดในวันแคมเปญ **Retarget ผู้ทิ้งตะกร้าเหล่านี้** ด้วยโฆษณาเฉพาะเริ่ม 48 ชั่วโมงก่อนงาน\n\n**การล่า voucher:** ผู้ซื้อไทยเชี่ยวชาญในการซ้อน voucher (Shopee voucher + voucher วิธีการชำระเงิน + voucher ผู้ขาย) สินค้าที่อนุญาตการซ้อน voucher หลายแบบเห็น conversion สูงขึ้น\n\n**Mobile-first:** การซื้อ Shopee ไทยกว่า 92%+ ในช่วงแคมเปญใหญ่อยู่บนมือถือ creative และประสบการณ์ landing page ของคุณต้องปรับแต่งสำหรับมือถือ",
        },
      },
      {
        heading: { en: "Shopee Live ad amplification", th: "การขยายโฆษณาด้วย Shopee Live" },
        body: {
          en: "Shopee Live is the platform's live-shopping feature and receives a significant algorithm boost during mega campaigns. Running Search Ads simultaneously with a Live session creates a compounding effect.\n\n**How to amplify a Live session with ads:**\n1) Pin your top 3 products for the session — these get the most visible product tags\n2) Activate Search Ads on those products 30 minutes before going live\n3) Run LIVE Ads (specific Live ad format) targeting your existing buyers and Lookalikes\n4) During the Live, use flash deal vouchers exclusive to live viewers — creates urgency\n5) Keep Search Ads running for 2 hours after the Live ends (residual interest)\n\n**Thai Live buyer behaviour:** Shoppers who discover a product via Shopee Live have 2–3x higher average order value than search shoppers. They trust the seller more after watching the demo, and often buy multiple items.",
          th: "Shopee Live คือฟีเจอร์ live-shopping ของแพลตฟอร์มและได้รับการ boost จาก algorithm อย่างมากในช่วงแคมเปญใหญ่ การรัน Search Ads พร้อมกันกับ Live session สร้างผลทบต้น\n\n**วิธีขยาย Live session ด้วยโฆษณา:**\n1) Pin สินค้า 3 อันดับแรกสำหรับ session แท็กสินค้าเหล่านี้จะมองเห็นได้ชัดเจนที่สุด\n2) เปิด Search Ads สำหรับสินค้าเหล่านั้น 30 นาทีก่อน go live\n3) รัน LIVE Ads (ฟอร์แมตโฆษณา Live เฉพาะ) กำหนดเป้าหมายผู้ซื้อเดิมและ Lookalikes\n4) ระหว่าง Live ใช้ flash deal voucher เฉพาะสำหรับผู้ชม live สร้าง urgency\n5) รัน Search Ads ต่อไปอีก 2 ชั่วโมงหลัง Live สิ้นสุด (ความสนใจที่เหลืออยู่)\n\n**พฤติกรรมผู้ซื้อ Live ไทย:** นักช้อปที่ค้นพบสินค้าผ่าน Shopee Live มีมูลค่าออเดอร์เฉลี่ยสูงกว่านักช้อปการค้นหา 2–3 เท่า พวกเขาไว้วางใจผู้ขายมากขึ้นหลังดูการ demo และมักซื้อหลายชิ้น",
        },
      },
      {
        heading: { en: "Budget allocation timeline for 11.11", th: "ไทม์ไลน์การจัดสรรงบสำหรับ 11.11" },
        body: {
          en: "The 6-week 11.11 budget ramp:\n\n**6–5 weeks before:** Apply for Flash Sale slots (these fill up fast). Apply for Affiliate campaign. Upload and approve all creatives in Shopee's system. Budget: 1x normal.\n\n**4–3 weeks before:** Increase Search Ads to 1.5x. Activate Affiliate commission (creators start promoting). Run discovery-focused ads to warm up your audience. Budget: 1.5x normal.\n\n**2 weeks before:** Search Ads at 2x. Retarget all website/shop visitors from the last 30 days. Launch LIVE Ads preview sessions to build follower count.\n\n**1 week before:** 3x budget. Heavy retargeting of cart abandoners. Final creative checks. Confirm Flash Sale slots are approved. Stock up — estimate 5–8x normal volume.\n\n**Campaign day (Nov 11):** 5–8x budget. Max budget live at 23:50 November 10. Monitor every 2 hours. Have contingency creatives ready. Run Boost timed around Flash Sale windows.",
          th: "การ ramp งบ 11.11 ระยะ 6 สัปดาห์:\n\n**6–5 สัปดาห์ก่อน:** สมัครช่อง Flash Sale (เต็มเร็วมาก) สมัครแคมเปญ Affiliate อัปโหลดและอนุมัติ creative ทั้งหมดในระบบ Shopee งบ: 1x ปกติ\n\n**4–3 สัปดาห์ก่อน:** เพิ่ม Search Ads เป็น 1.5x เปิดใช้งานค่าคอมมิชชัน Affiliate (creator เริ่มโปรโมต) รันโฆษณาที่เน้น discovery เพื่อ warm up audience งบ: 1.5x ปกติ\n\n**2 สัปดาห์ก่อน:** Search Ads ที่ 2x Retarget ผู้เข้าชมเว็บ/ร้านค้าทั้งหมดจาก 30 วันที่ผ่านมา เปิด LIVE Ads preview session เพื่อเพิ่มจำนวนผู้ติดตาม\n\n**1 สัปดาห์ก่อน:** งบ 3x Retarget ผู้ทิ้งตะกร้าอย่างหนัก ตรวจสอบ creative สุดท้าย ยืนยันว่าช่อง Flash Sale ได้รับการอนุมัติ เติมสต็อก — ประมาณปริมาณ 5–8 เท่าปกติ\n\n**วันแคมเปญ (11 พ.ย.):** งบ 5–8x งบสูงสุดเปิดใช้งานเวลา 23:50 ของ 10 พ.ย. ติดตามทุก 2 ชั่วโมง เตรียม creative สำรองไว้ รัน Boost ตั้งเวลารอบช่วงเวลา Flash Sale",
        },
      },
    ],
    dragMatch: {
      prompt: {
        en: "Match each Shopee mega campaign to its strongest product category.",
        th: "จับคู่แคมเปญใหญ่ Shopee กับหมวดหมู่สินค้าที่แข็งแกร่งที่สุด",
      },
      pairs: [
        {
          left: { en: "9.9", th: "9.9" },
          right: { en: "Fashion & back-to-school", th: "แฟชั่นและกลับโรงเรียน" },
        },
        {
          left: { en: "10.10", th: "10.10" },
          right: { en: "Beauty & home / lifestyle", th: "ความงามและบ้าน / ไลฟ์สไตล์" },
        },
        {
          left: { en: "11.11", th: "11.11" },
          right: { en: "All categories — biggest spike of the year", th: "ทุกหมวดหมู่ — พุ่งสูงสุดของปี" },
        },
        {
          left: { en: "12.12", th: "12.12" },
          right: { en: "Gifting & year-end inventory clearance", th: "ของขวัญและระบายสต็อกสิ้นปี" },
        },
      ],
    },
    quiz: {
      questions: [
        {
          prompt: { en: "When do 70% of Thai 11.11 purchases happen?", th: "เมื่อไหร่ที่ 70% ของการซื้อ 11.11 ไทยเกิดขึ้น" },
          options: [
            { en: "09:00–12:00", th: "09:00–12:00" },
            { en: "Midnight 00:00–02:00 and lunch 12:00–13:00", th: "เที่ยงคืน 00:00–02:00 และมื้อเที่ยง 12:00–13:00" },
            { en: "18:00–22:00", th: "18:00–22:00" },
            { en: "All day evenly distributed", th: "ตลอดทั้งวันกระจายสม่ำเสมอ" },
          ],
          correctIndex: 1,
          explanation: {
            en: "Thai shoppers set alarms for the midnight launch, then a second spike hits at lunch. Budget maximum should be live from 23:50 the night before.",
            th: "นักช้อปไทยตั้งนาฬิกาปลุกสำหรับการเปิดตัวเที่ยงคืน จากนั้นมีพุ่งอีกครั้งตอนมื้อเที่ยง งบสูงสุดควรเปิดใช้งานตั้งแต่ 23:50 คืนก่อน",
          },
        },
        {
          prompt: { en: "How much earlier should you start Search Ads before a Shopee Live session?", th: "ควรเริ่ม Search Ads เร็วกว่า Shopee Live session กี่ชั่วโมง" },
          options: [
            { en: "5 hours before", th: "5 ชั่วโมงก่อน" },
            { en: "At the same time as going live", th: "พร้อมกับ go live" },
            { en: "30 minutes before", th: "30 นาทีก่อน" },
            { en: "The day before", th: "วันก่อน" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Starting Search Ads 30 minutes before Live builds early traffic momentum, lifting product ranking just as the Live audience arrives.",
            th: "การเริ่ม Search Ads 30 นาทีก่อน Live สร้างแรงกระตุ้น traffic ในช่วงต้น ยก ranking สินค้าพอดีเมื่อผู้ชม Live มาถึง",
          },
        },
        {
          prompt: { en: "What is the most important thing to check in your margin calculation before stacking seller vouchers on mega campaign day?", th: "สิ่งที่สำคัญที่สุดที่ต้องตรวจสอบในการคำนวณมาร์จิ้นก่อนซ้อน seller voucher ในวันแคมเปญใหญ่คืออะไร" },
          options: [
            { en: "Your TikTok follower count", th: "จำนวนผู้ติดตาม TikTok" },
            { en: "Your shipping carrier capacity", th: "ความสามารถของผู้ให้บริการขนส่ง" },
            { en: "Whether the voucher cost leaves you with any profit margin after COGS and fees", th: "ค่า voucher ทิ้งมาร์จิ้นกำไรไว้ให้คุณหลัง COGS และค่าธรรมเนียมหรือไม่" },
            { en: "Your Shopee store rating", th: "คะแนนร้านค้า Shopee" },
          ],
          correctIndex: 2,
          explanation: {
            en: "Seller vouchers reduce your effective selling price. Without checking margin: high volume + deep discount = revenue with no profit. Factor in COGS + Shopee commission + ad spend + voucher value.",
            th: "Seller voucher ลดราคาขายจริงของคุณ หากไม่ตรวจสอบมาร์จิ้น: ปริมาณสูง + ส่วนลดลึก = รายได้ไม่มีกำไร คำนวณ COGS + ค่าคอมมิชชัน Shopee + ค่าโฆษณา + มูลค่า voucher",
          },
        },
      ],
    },
  },
];
