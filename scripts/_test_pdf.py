from fpdf import FPDF

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font("Helvetica", "B", 12)
pdf.cell(0, 8, "Core capabilities", new_x="LMARGIN", new_y="NEXT")
pdf.set_font("Helvetica", "", 11)
items = [
    "Web platforms: landing pages, company profiles, web apps, and e-commerce systems.",
    "Mobile apps: intuitive iOS and Android experiences for local, SMB, and enterprise use cases.",
    "Full-stack systems: APIs, admin dashboards, reseller systems, booking, inventory, and POS.",
    "Delivery model: discovery, milestone-based builds, testing, deployment, and post-launch support.",
]
for item in items:
    pdf.multi_cell(0, 7, item)
    pdf.ln(1)
pdf.output("/Users/ryansutrisno/Documents/Code/trazmediacom/company-profile-trazmedia.pdf")
print("done")
