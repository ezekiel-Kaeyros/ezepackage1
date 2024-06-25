interface CustomEventMap {
  pageChange: CustomEvent<{ pageIndex: number }>;
}

declare global {
  interface DocumentEventMap extends CustomEventMap {}
}
