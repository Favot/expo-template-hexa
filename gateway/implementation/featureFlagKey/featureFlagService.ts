import { FeatureFlagKey, FeatureFlippingService } from "@/domain"
import { BOOLEAN_FEATURE_FLAG_MAP } from "@/lib/featureFlag"

const isFeatureFlagActivated = async (
  key: FeatureFlagKey,
): Promise<Boolean> => {
  return BOOLEAN_FEATURE_FLAG_MAP[key]
}

export const ffServiceEnvVarImplementation: FeatureFlippingService = {
  isFeatureFlagActivated,
}
