import type { EffectErrorHandlerParams } from 'redux-effex';

export default function genericErrorHandler({action, error}: EffectErrorHandlerParams) {
  console.log({ error, action });
}
