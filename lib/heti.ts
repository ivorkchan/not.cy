export async function autoSpacing() {
  try {
    const Heti = (await import("@/public/scripts/heti-addon.min")).default
    console.log("Heti loaded:", Heti)
    const heti = new Heti(".heti")
    heti.autoSpacing()
    console.log("Heti autoSpacing applied.")
  } catch (error) {
    console.error("Error loading Heti:", error)
  }
}
