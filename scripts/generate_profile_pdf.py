from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from pathlib import Path

output_path = Path("/Users/ryansutrisno/Documents/Code/trazmediacom/company-profile-trazmedia.pdf")

pdf = SimpleDocTemplate(
    str(output_path),
    pagesize=A4,
    leftMargin=18*mm,
    rightMargin=18*mm,
    topMargin=18*mm,
    bottomMargin=18*mm,
)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    "CompanyName",
    parent=styles["Title"],
    fontSize=28,
    leading=34,
    textColor=colors.HexColor("#111111"),
    spaceAfter=8,
    alignment=1,
))
styles.add(ParagraphStyle(
    "DocTitle",
    parent=styles["Heading1"],
    fontSize=18,
    leading=22,
    textColor=colors.HexColor("#111111"),
    spaceAfter=6,
    alignment=1,
))
styles.add(ParagraphStyle(
    "Tagline",
    parent=styles["Normal"],
    fontSize=12,
    leading=16,
    textColor=colors.HexColor("#555555"),
    alignment=1,
    spaceAfter=4,
))
styles.add(ParagraphStyle(
    "SectionTitle",
    parent=styles["Heading2"],
    fontSize=16,
    leading=20,
    textColor=colors.HexColor("#1f1f1f"),
    spaceAfter=8,
    spaceBefore=14,
))
styles.add(ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontSize=11,
    leading=15,
    textColor=colors.HexColor("#333333"),
    spaceAfter=10,
))
styles.add(ParagraphStyle(
    "TrazBullet",
    parent=styles["Normal"],
    fontSize=11,
    leading=15,
    textColor=colors.HexColor("#333333"),
    leftIndent=14,
    spaceAfter=6,
    bulletIndent=6,
    bulletFontName="Helvetica-Bold",
    bulletText="\u2022",
))
styles.add(ParagraphStyle(
    "TechLine",
    parent=styles["Normal"],
    fontSize=10,
    leading=14,
    textColor=colors.HexColor("#777777"),
    spaceAfter=10,
    leftIndent=10,
))

accent = colors.HexColor("#c85032")

def section_rule():
    return Table([["", ""]], colWidths=[70, None], rowHeights=[1])

section_rule_style = TableStyle([
    ("BACKGROUND", (0, 0), (0, 0), accent),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
])

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica-Oblique", 8)
    canvas.setFillColor(colors.HexColor("#888888"))
    canvas.drawCentredString(A4[0]/2, 12*mm, "https://trazmedia.com | Code that scales, design that converts")
    canvas.restoreState()

story = []

# Cover
story.append(Spacer(1, 70*mm))
story.append(Paragraph("TRAZMEDIA", styles["CompanyName"]))
story.append(Paragraph("Company Profile", styles["DocTitle"]))
story.append(Spacer(1, 4*mm))
story.append(Paragraph("Code that scales, design that converts", styles["Tagline"]))
story.append(Paragraph("Bridging design + code + business", styles["Tagline"]))
story.append(Spacer(1, 10*mm))
story.append(Paragraph("Yogyakarta, Indonesia", styles["Tagline"]))
story.append(Paragraph("https://trazmedia.com", styles["Tagline"]))
story.append(PageBreak())

# About
story.append(Paragraph("About Trazmedia", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    "Trazmedia is a Yogyakarta-based software house founded in 2017. We design, build, and ship production web platforms "
    "and digital products for businesses across Indonesia and beyond.",
    styles["Body"],
))
story.append(Paragraph(
    "We specialize in modern web and mobile development with an emphasis on engineering quality, clean architecture, "
    "and outcomes that are easy to operate after launch.",
    styles["Body"],
))

story.append(Paragraph("Core capabilities", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
for text in [
    "Web platforms: landing pages, company profiles, web apps, and e-commerce systems.",
    "Mobile apps: intuitive iOS and Android experiences for local, SMB, and enterprise use cases.",
    "Full-stack systems: APIs, admin dashboards, reseller systems, booking, inventory, and POS.",
    "Delivery model: discovery, milestone-based builds, testing, deployment, and post-launch support.",
]:
    story.append(Paragraph(text, styles["TrazBullet"], bulletText="\u2022"))

story.append(Paragraph("Tech stack", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    "React, Next.js, Astro, Laravel, TypeScript, Tailwind CSS, Inertia.js, Supabase, PostgreSQL, MySQL, Filament, Midtrans, Vercel, and more.",
    styles["Body"],
))

# How We Work
story.append(PageBreak())
story.append(Paragraph("How We Work", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    "We structure most engagements around a lightweight discovery stage followed by a milestone-based build. "
    "A named technical lead owns delivery and keeps the client Product Owner aligned on priorities, acceptance, and technical tradeoffs.",
    styles["Body"],
))
story.append(Paragraph(
    "We routinely deliver in client-controlled repositories and cloud environments. The client owns the source code, data, design files, "
    "and cloud assets after delivery.",
    styles["Body"],
))
story.append(Paragraph(
    "English documentation, status updates, and plain-language technical explanations are part of our standard workflow.",
    styles["Body"],
))

# Selected Work
story.append(Paragraph("Selected Work", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    "The following projects are representative of production platforms we have delivered with multi-role access, admin workflows, "
    "operational complexity, and ongoing support.",
    styles["Body"],
))

projects = [
    (
        "Gojamu Reseller",
        "Role-based reseller management with admin/reseller dashboards, product master data, warehouse and inventory management, "
        "price tiers, rewards, and stock tracking.",
        "Laravel, Inertia.js, React 19, TypeScript, Tailwind v4",
    ),
    (
        "Suntree",
        "Cohort-based online learning platform connecting students with verified teachers. Includes batch-based programs, payment confirmation, "
        "and administrative workflows.",
        "Laravel, Inertia.js, React 19, TypeScript, Tailwind v4",
    ),
    (
        "EziTour",
        "End-to-end tour booking platform with public catalog, checkout, Midtrans payment, traveler dashboard, and Filament admin panel.",
        "Laravel 12, Filament, Midtrans, MySQL",
    ),
    (
        "VaporPOS",
        "Modern POS and inventory management system built for UMKM and retail operations, deployed for daily use with transaction tracking and stock management.",
        "React, TypeScript, Express.js, Supabase, PostgreSQL",
    ),
]

for title, desc, tech in projects:
    story.append(Paragraph(title, styles["SectionTitle"]))
    story.append(Paragraph(desc, styles["Body"]))
    story.append(Paragraph(f"Tech: {tech}", styles["TechLine"]))

# Why Trazmedia
story.append(PageBreak())
story.append(Paragraph("Why Trazmedia for Katalis", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    "Trazmedia is well suited to support Katalis Ekosistem Nusantara on Phase 1 of the social engagement platform. "
    "The work maps closely to systems we already build: membership spaces, role-based access, program activity tracking, contribution recording, "
    "admin workflows, and deployment-ready web architecture.",
    styles["Body"],
))
story.append(Paragraph(
    "We can supply senior technical leadership, full-stack delivery, QA review, and deployment security support - with clear ownership "
    "and a single point of contact for the Product Owner.",
    styles["Body"],
))
story.append(Paragraph(
    "We are comfortable working under client-managed repositories and cloud infrastructure, and we are happy to transfer full ownership "
    "of source code, data, design files, and cloud accounts on delivery.",
    styles["Body"],
))

story.append(Spacer(1, 8*mm))
story.append(Paragraph("Contact", styles["SectionTitle"]))
story.append(section_rule())
story.append(Table([["", ""]], colWidths=[70, None], rowHeights=[1.2], style=section_rule_style))
story.append(Spacer(1, 2*mm))
story.append(Paragraph(
    "If this profile fits what you need, we are happy to share our full portfolio page and schedule a short intro call before the application deadline.",
    styles["Body"],
))
story.append(Paragraph("<b>Website</b>: https://trazmedia.com", styles["Body"]))
story.append(Paragraph("<b>Email</b>: available via our contact page", styles["Body"]))
story.append(Paragraph("<b>Location</b>: Yogyakarta, Indonesia", styles["Body"]))

pdf.build(story, onFirstPage=footer, onLaterPages=footer)
print(f"PDF generated: {output_path}")
print(f"File size: {output_path.stat().st_size:,} bytes")
