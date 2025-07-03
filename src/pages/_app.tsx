import "@radix-ui/themes/styles.css"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { Theme, ThemePanel } from "@radix-ui/themes"
import { store } from "store"
import { ThemeProvider, useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute={"class"}>
        <RadixThemeWrapper>
          <Component {...pageProps} />
        </RadixThemeWrapper>
      </ThemeProvider>
    </Provider>
  )
}

function RadixThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const accentColor = theme === "dark" ? "crimson" : "crimson"
  const appearance = theme === "dark" ? "dark" : "light"
  return (
    <Theme accentColor={accentColor} appearance={appearance} grayColor="sand" radius="large" scaling="95%">
      <ThemePanel />
      {children}
    </Theme>
  )
}
