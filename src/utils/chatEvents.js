export const TOBENX_CHAT_EVENT = 'tobenx:open-chat';

export function openTobenxChat() {
  window.dispatchEvent(new Event(TOBENX_CHAT_EVENT));
}
