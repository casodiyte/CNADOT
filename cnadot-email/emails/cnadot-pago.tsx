import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from 'react-email';
import * as React from 'react';

interface CnadotPagoProps {
  firstName?: string;
}

export const CnadotPagoEmail = ({ firstName = '*|FNAME|*' }: CnadotPagoProps) => (
  <Html>
    <Head />
    <Preview>¡Pago exitoso! Tu lugar está asegurado.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Barra superior turquesa */}
        <div style={topBar} />

        {/* Logotipo */}
        <Section style={headerSection}>
          <Img
            src="https://cnadot.healthcareexp.com/assets/cnadot.png"
            alt="CNADOT Logo"
            width="280"
            style={logo}
          />
        </Section>

        {/* Banner llamativo de título */}
        <Section style={bannerSection}>
          <Heading style={bannerText}>¡Pago Confirmado!</Heading>
        </Section>

        {/* Cuerpo del correo */}
        <Section style={contentSection}>
          <Text style={paragraph}>Hola <strong>{firstName}</strong>,</Text>
          <Text style={paragraph}>
            Tenemos excelentes noticias: <strong>hemos recibido tu pago exitosamente</strong>.
          </Text>
          <Text style={paragraph}>
            Tu inscripción al <span style={{color: '#1a4163', fontWeight: 'bold'}}>Curso Nacional Avanzado de los Procesos de Donación de Órganos y Tejidos</span> está completamente confirmada y tu lugar ha sido asegurado.
          </Text>

          {/* Detalles del pago */}
          <Section style={detailsBox}>
            <Heading as="h3" style={detailsTitle}>Detalles de tu inscripción</Heading>
            <Text style={detailText}>
              <span style={detailLabel}>Fase Inscrita:</span> <span style={detailValue}>*|FASE|*</span>
            </Text>
            <Text style={detailText}>
              <span style={detailLabel}>Asistencia:</span> <span style={detailValue}>*|DIAS_ASISTENCIA|*</span>
            </Text>
            <Text style={detailText}>
              <span style={detailLabel}>Monto:</span> <span style={detailValue}>*|PAYMENT_AMOUNT|*</span>
            </Text>
            <Text style={detailText}>
              <span style={detailLabel}>Referencia:</span> <span style={detailValue}>*|ORDER_ID|*</span>
            </Text>
            <Text style={detailText}>
              <span style={detailLabel}>Fecha:</span> <span style={detailValue}>*|PAYMENT_DATE|*</span>
            </Text>
          </Section>

          <Text style={paragraph}>
            Además de este correo, en breve recibirás un comprobante oficial emitido de forma segura a través de nuestro procesador de pagos.
          </Text>

          <Text style={signature}>
            ¡Nos emociona contar contigo!<br />
            <span style={signatureName}>El equipo de CNADOT</span>
          </Text>
        </Section>

        {/* Sección de Facturación pequeña en el pie de página */}
        <Section style={billingSection}>
          <Text style={billingText}>
            ¿Necesitas factura de esta compra?
          </Text>
          <Button style={smallButton} href="https://healthcareexp.com/facturacion">
            Solicitar Factura
          </Button>
        </Section>

        {/* Pie de página oscuro */}
        <Section style={footerSection}>
          <Img
            src="https://cenatra.gob.mx/c/img/logos/CENATRA.png"
            alt="CENATRA Logo"
            width="150"
            style={footerLogo}
          />
          <Text style={footerText}>
            © *|CURRENT_YEAR|* CNADOT. Todos los derechos reservados.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CnadotPagoEmail;

const main = {
  backgroundColor: '#e5e9f0',
  padding: '40px 10px',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
};

const topBar = {
  backgroundColor: '#1ba1a5',
  height: '10px',
  width: '100%',
};

const headerSection = {
  textAlign: 'center' as const,
  padding: '40px 20px 30px 20px',
  backgroundColor: '#ffffff',
};

const logo = {
  maxWidth: '280px',
  height: 'auto',
  margin: '0 auto',
  border: 'none',
  outline: 'none',
};

const bannerSection = {
  background: 'linear-gradient(135deg, #1ba1a5, #128285)', // Usando el turquesa para éxito
  textAlign: 'center' as const,
  padding: '30px 20px',
};

const bannerText = {
  margin: '0',
  fontSize: '26px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  color: '#ffffff',
};

const contentSection = {
  padding: '40px 40px 20px 40px',
  color: '#333333',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.7',
  margin: '0 0 16px 0',
};

const detailsBox = {
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '20px',
  margin: '25px 0',
};

const detailsTitle = {
  margin: '0 0 15px 0',
  fontSize: '16px',
  color: '#1a4163',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const detailText = {
  fontSize: '15px',
  margin: '0 0 10px 0',
  lineHeight: '1.5',
};

const detailLabel = {
  color: '#718096',
  fontWeight: 'normal',
};

const detailValue = {
  color: '#2d3748',
  fontWeight: 'bold',
};

const signature = {
  fontSize: '16px',
  lineHeight: '1.8',
  marginTop: '35px',
  marginBottom: '0',
};

const signatureName = {
  color: '#1ba1a5',
  fontSize: '20px',
  fontWeight: 'bold',
};

const billingSection = {
  backgroundColor: '#f0f4f8',
  padding: '20px 40px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e2e8f0',
};

const billingText = {
  margin: '0 0 10px 0',
  color: '#4a5568',
  fontSize: '14px',
};

const smallButton = {
  backgroundColor: '#1a4163',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '8px 20px',
};

const footerSection = {
  backgroundColor: '#f8fafc',
  padding: '30px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e2e8f0',
};

const footerLogo = {
  maxWidth: '150px',
  height: 'auto',
  margin: '0 auto 15px auto',
  border: 'none',
  outline: 'none',
};

const footerText = {
  margin: '0',
  color: '#718096',
  fontSize: '13px',
};
