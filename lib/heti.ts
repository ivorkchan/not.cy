export async function autoSpacing() {
  const Heti = (await import("@/public/scripts/heti-addon.min")).default
  const heti = new Heti(".heti")
  heti.autoSpacing()
}
