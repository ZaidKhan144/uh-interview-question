<?xml version="1.0" encoding="UTF-8"?>
<!-- 
Commentary:
This XSLT stylesheet is used to transform the XML representation of the side navigation menu into an HTML structure.
This file uses the sidenav.xml file as input and generates an HTML structure with a <nav> element containing nested <ul> and <li> elements.
-->


<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <!-- Output settings for pretty-printing -->
  <xsl:output method="html" indent="yes"/>

  <!-- Match the root element and create the <nav> structure -->
  <xsl:template match="/sidenav">
    <nav role="navigation">
      <ul>
        <!-- Apply template to all first-level navitem elements -->
        <xsl:apply-templates select="navitem" />
      </ul>
    </nav>
  </xsl:template>

  <!-- Template to match each navitem element -->
  <xsl:template match="navitem">
    <xsl:variable name="elementHasChildren" select="navitem" />
    
    <li class="{@class}">
      <!-- Create the anchor tag with href and label attributes -->
      <a href="{@href}"><xsl:value-of select="@label" /></a>
      
      <!-- Check if there are any child navitem elements -->
      <xsl:if test="navitem">
        <ul>
          <!-- Apply template recursively to all child navitem elements -->
          <xsl:apply-templates select="navitem" />
        </ul>
      </xsl:if>
    </li>
  </xsl:template>
</xsl:stylesheet>
