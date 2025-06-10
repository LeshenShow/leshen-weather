import "@/styles/globals.css"

import type { AppProps } from "next/app"

import { Provider } from "react-redux"
import { Theme, ThemePanel } from "@radix-ui/themes"
import { store } from "store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme accentColor="ruby" grayColor="sand" radius="large" scaling="95%">
        {/* <ThemePanel /> */}
        <Component {...pageProps} />
      </Theme>
    </Provider>
  )
}
