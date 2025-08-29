// src/api/contact.ts (full Gemini-like proxy - replace if your script differs)
export async function submitForm(data: { phoneNumber: string; customerName?: string; }) {
  const url = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://f1ernandoautomation.app.n8n.cloud/webhook/salon-appointment-request';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to initiate call');
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Failed to submit' };
  }
}