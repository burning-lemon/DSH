/**
 * dsh-hello — the smallest working Host plugin for DeepSeek Harness.
 *
 * A bundle's `cordis.patch.yml` inserts this package as a Loader entry, so the
 * only requirement is one of the supported export forms: `apply(ctx, config)`
 * (optionally with `inject` / `Config`) or a service class as the default export.
 */
export const name = 'dsh-hello'

/**
 * Runs once when the profile composition loads this plugin.
 * @param ctx Cordis context provided by the Loader.
 */
export function apply(ctx) {
  ctx.logger?.info?.('[dsh-hello] plugin loaded')
  console.log('[dsh-hello] plugin loaded')
}
