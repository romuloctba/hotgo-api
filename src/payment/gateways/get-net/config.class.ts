export const API_URL = 'https://api-sandbox.getnet.com.br/';

export const CREDENTIALS = {
  CLIENT_ID: 'd1fde4fe-73a3-41fe-b28e-b4eab44b0384',
  CLIENT_SECRET: 'd7053b98-1e17-4bd7-9b95-13b5eed71434',
  AUTH_TOKEN_SCOPE: 'oob',
  AUTH_TOKEN_GRANT_TYPE: 'client_credentials',
};

export const GETNET_ENDPOINTS = {
  AUTH_TOKEN: API_URL + 'auth/oauth/v2/token',
  CARD_TOKEN: API_URL + 'v1/tokens/card',
  CARD_VERIFICATION: API_URL + 'v1/cards/verification',
  CARDS: API_URL + 'v1/cards',
  SINGLE_CARD: API_URL + 'v1/cards/{card_id}',
  CREDIT_PAYMENT: API_URL + 'v1/payments/credit',
  CREDIT_PAYMENT_CONFIRM: API_URL + 'v1/payments/credit/{payment_id}/confirm',
  CREDIT_PAYMENT_FINALIZE: API_URL + 'v1/payments/credit/{payment_id}/authenticated/finalize',
  CREDIT_PAYMENT_ADJUSTMENT: API_URL + 'v1/payments/credit/{payment_id}/adjustment',
  CREDIT_PAYMENT_CANCEL: API_URL + 'v1/payments/credit/{payment_id}/cancel',
  DEBIT_PAYMENT: API_URL + 'v1/payments/debit',
  DEBIT_PAYMENT_FINALIZE: API_URL + 'v1/payments/debit/{payment_id}/authenticated/finalize',
  BOLETO_PAYMENT: API_URL + 'v1/payments/boleto',
  BOLETO_PAYMENT_PDF: API_URL + 'v1/payments/boleto/{payment_id}/pdf',
  BOLETO_PAYMENT_HTML: API_URL + 'v1/payments/boleto/{payment_id}/html',
  PAYMENT_CANCEL_REQUEST: API_URL + 'v1/payments/cancel/request',
  PAYMENT_CANCEL_REQUEST_INFO: API_URL + 'v1/payments/cancel/request/{cancel_request_id}',
  CUSTOMERS: API_URL + 'v1/customers',
  SINGLE_CUSTOMER: API_URL + 'v1/customers/{customer_id}',
  PLANS: API_URL + 'v1/plans',
  SINGLE_PLAN: API_URL + 'v1/plans/{plan_id}',
  SINGLE_PLAN_STATUS: API_URL + 'v1/plans/{plan_id}/status/{status}',
  SUBSCRIPTIONS: API_URL + 'v1/subscriptions',
  SINGLE_SUBSCRIPTION: API_URL + 'v1/subscriptions/{subscription_id}',
  SINGLE_SUBSCRIPTION_CANCEL: API_URL + 'v1/subscriptions/{subscription_id}/cancel',
  SINGLE_SUBSCRIPTION_CHARGES_PROJECTION: API_URL + 'v1/subscriptions/{subscription_id}/charges/projection',
  SINGLE_SUBSCRIPTION_CONFIRM_PAYMENT: API_URL + 'v1/subscriptions/{subscription_id}/confirmPayment',
  SINGLE_SUBSCRIPTION_PAYMENT_DATA: API_URL + 'v1/subscriptions/{subscription_id}/paymentDate',
  SINGLE_SUBSCRIPTION_PAYMENT_TYPE_CREDIT: API_URL + 'v1/subscriptions/{subscription_id}/paymentType/credit/card',
  CHARGES: API_URL + 'v1/charges',
};
