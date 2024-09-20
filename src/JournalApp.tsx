import { AppRouter } from "./router";
import { AppTheme } from "./themes";

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  )
}
