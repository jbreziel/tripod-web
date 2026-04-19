import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type LeadEmailProps = {
  name: string;
  email: string;
  phone?: string;
  postcode?: string;
  projectType: string;
  projectSize?: string;
  qualityTier?: string;
  message: string;
  calculatorContext?: {
    type?: string;
    tier?: string;
    m2?: string;
  };
  submittedAt: string;
  pdfAttached?: boolean;
};

const wrapperStyle = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
  backgroundColor: "#FAFAF7",
  padding: "24px 0",
};

const containerStyle = {
  maxWidth: "560px",
  margin: "0 auto",
  backgroundColor: "#FFFFFF",
  padding: "32px",
  border: "1px solid #E8E4DD",
};

const headingStyle = {
  color: "#1A1A1A",
  fontSize: "20px",
  fontWeight: 600,
  margin: "0 0 16px 0",
};

const subHeadingStyle = {
  color: "#1A1A1A",
  fontSize: "14px",
  fontWeight: 600,
  margin: "20px 0 8px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.04em",
};

const rowStyle = {
  margin: "4px 0",
  fontSize: "14px",
  color: "#1A1A1A",
};

const labelStyle = {
  display: "inline-block",
  width: "120px",
  color: "#6B6B6B",
};

function row(label: string, value: string | undefined) {
  if (!value) return null;
  return (
    <Text style={rowStyle} key={label}>
      <span style={labelStyle}>{label}</span>
      {value}
    </Text>
  );
}

export function LeadEmail(props: LeadEmailProps) {
  const {
    name,
    email,
    phone,
    postcode,
    projectType,
    projectSize,
    qualityTier,
    message,
    calculatorContext,
    submittedAt,
    pdfAttached,
  } = props;

  const hasCalcContext =
    calculatorContext &&
    (calculatorContext.type ||
      calculatorContext.tier ||
      calculatorContext.m2);

  return (
    <Html>
      <Head />
      <Preview>
        {`Nieuwe aanvraag: ${projectType} — ${qualityTier ?? "—"} — ${postcode ?? "—"}`}
      </Preview>
      <Body style={wrapperStyle}>
        <Container style={containerStyle}>
          <Heading style={headingStyle}>
            Nieuwe aanvraag via tripodbv.nl
          </Heading>
          <Text style={{ fontSize: "13px", color: "#6B6B6B", margin: "0 0 16px 0" }}>
            Ontvangen: {submittedAt}
          </Text>

          <Section>
            <Text style={subHeadingStyle}>Contact</Text>
            {row("Naam", name)}
            {row("E-mail", email)}
            {row("Telefoon", phone)}
            {row("Postcode", postcode)}
          </Section>

          <Hr style={{ borderColor: "#E8E4DD", margin: "20px 0" }} />

          <Section>
            <Text style={subHeadingStyle}>Project</Text>
            {row("Type", projectType)}
            {row("Omvang", projectSize)}
            {row("Kwaliteit", qualityTier)}
          </Section>

          {hasCalcContext && (
            <>
              <Hr style={{ borderColor: "#E8E4DD", margin: "20px 0" }} />
              <Section>
                <Text style={subHeadingStyle}>Calculator-keuzes</Text>
                {row("Type", calculatorContext?.type)}
                {row("Kwaliteit", calculatorContext?.tier)}
                {row("Oppervlakte", calculatorContext?.m2 ? `${calculatorContext.m2} m²` : undefined)}
              </Section>
            </>
          )}

          <Hr style={{ borderColor: "#E8E4DD", margin: "20px 0" }} />

          <Section>
            <Text style={subHeadingStyle}>Bericht</Text>
            <Text style={{ ...rowStyle, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>

          {pdfAttached && (
            <Text
              style={{
                margin: "16px 0 0 0",
                fontSize: "12px",
                color: "#6B6B6B",
                fontStyle: "italic",
              }}
            >
              PDF-bijlage aanwezig.
            </Text>
          )}

          <Hr style={{ borderColor: "#E8E4DD", margin: "24px 0" }} />
          <Text style={{ fontSize: "12px", color: "#6B6B6B", margin: 0 }}>
            Beantwoord deze e-mail om direct met {name} in contact te komen.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export function renderPlainText(props: LeadEmailProps): string {
  const lines: string[] = [];
  lines.push("Nieuwe aanvraag via tripodbv.nl");
  lines.push(`Ontvangen: ${props.submittedAt}`);
  lines.push("");
  lines.push("CONTACT");
  lines.push(`Naam:       ${props.name}`);
  lines.push(`E-mail:     ${props.email}`);
  if (props.phone) lines.push(`Telefoon:   ${props.phone}`);
  if (props.postcode) lines.push(`Postcode:   ${props.postcode}`);
  lines.push("");
  lines.push("PROJECT");
  lines.push(`Type:       ${props.projectType}`);
  if (props.projectSize) lines.push(`Omvang:     ${props.projectSize}`);
  if (props.qualityTier) lines.push(`Kwaliteit:  ${props.qualityTier}`);
  if (
    props.calculatorContext &&
    (props.calculatorContext.type ||
      props.calculatorContext.tier ||
      props.calculatorContext.m2)
  ) {
    lines.push("");
    lines.push("CALCULATOR-KEUZES");
    if (props.calculatorContext.type)
      lines.push(`Type:       ${props.calculatorContext.type}`);
    if (props.calculatorContext.tier)
      lines.push(`Kwaliteit:  ${props.calculatorContext.tier}`);
    if (props.calculatorContext.m2)
      lines.push(`Oppervlakte: ${props.calculatorContext.m2} m²`);
  }
  lines.push("");
  lines.push("BERICHT");
  lines.push(props.message);
  if (props.pdfAttached) {
    lines.push("");
    lines.push("(PDF-bijlage aanwezig.)");
  }
  lines.push("");
  lines.push(`Beantwoord deze e-mail om direct met ${props.name} in contact te komen.`);
  return lines.join("\n");
}
