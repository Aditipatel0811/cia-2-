from lxml import etree

xml_file = "joke.xml"
xsl_file = "joke.xsl"
xml_doc = etree.parse(xml_file)
xsl_doc = etree.parse(xsl_file)

transform = etree.XSLT(xsl_doc)

result_tree = transform(xml_doc)

transformed_html = str(result_tree)

output_html_file = "jokesoutput.html"

with open(output_html_file, "w") as html_file:
    html_file.write(transformed_html)

print(f"Transformed HTML saved to {output_html_file}")
