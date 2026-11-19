# GTM: envíos de formularios a GA4

Los formularios envían al `dataLayer` eventos de éxito solo tras una respuesta HTTP satisfactoria:

- `lead_form_success` para el formulario de contacto.
- `free_call_form_success` para el formulario de llamada gratuita.

Los eventos de intento, validación y error (`form_submit_attempt`, `form_validation_error`, `form_submit_error`, y sus equivalentes `free_call_form_*`) no deben disparar la conversión.

## Activador

Crea en Google Tag Manager el activador de tipo **Evento personalizado** llamado:

`Formularios — éxito`

Usa esta expresión regular como nombre de evento:

`^(lead_form_success|free_call_form_success)$`

## Etiqueta GA4

Crea una etiqueta de tipo **Evento de Google Analytics: GA4** llamada:

`GA4 — form_submit`

- ID de medición: usa la configuración de GA4 ya existente en el contenedor.
- Nombre del evento: `form_submit`.
- Activador: `Formularios — éxito`.
- Parámetros recomendados: `form_name` con `{{Event}}`, `page` con la variable de capa de datos `page`, y `page_path` con la variable de capa de datos `page_path`.

No configures variables de capa de datos para nombre, teléfono, email, motivo de consulta ni otros datos personales o clínicos. Respeta también el consentimiento de `analytics_storage` configurado en el contenedor.
