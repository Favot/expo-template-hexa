import { Session } from "@/domain"
import { SessionService } from "@/domain/session/sessionService"
import { mockImplemSwitcher } from "@/gateway/implementationScannerUtils"
import { sessionServiceInMemoryImplementation } from "./sessionServiceInMemoryImplementation"
import { sessionServiceStorageImplementation } from "./sessionServiceStorageImplementation"


const getSession = async (key: "session"): Promise<Session | null> => {
  const implem = await mockImplemSwitcher({
    mockFF: "FF_SESSION_MOCK",
    realImplem: sessionServiceStorageImplementation.getSession,
    mockImplem: sessionServiceInMemoryImplementation.getSession,
  })
  return implem(key)
}

const setSession = async (session: Session | null): Promise<void> => {
  const implem = await mockImplemSwitcher({
    mockFF: "FF_SESSION_MOCK",
    realImplem: sessionServiceStorageImplementation.setSession,
    mockImplem: sessionServiceInMemoryImplementation.setSession,
  })
  return implem(session)
}



export const sessionImplementation: SessionService = {
  getSession,
  setSession,
}