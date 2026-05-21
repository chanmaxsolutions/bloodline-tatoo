import {
  Building2,
  Clock,
  ClipboardList,
  Globe,
  HeartPulse,
  MessageSquare,
  PenTool,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const standardsProofIconMap = {
  "shield-check": ShieldCheck,
  "pen-tool": PenTool,
  "building-2": Building2,
  globe: Globe,
  "message-square": MessageSquare,
  "clipboard-list": ClipboardList,
  clock: Clock,
  "heart-pulse": HeartPulse,
} as const;

type StandardsProofIconId = keyof typeof standardsProofIconMap;

function standardsProofIconForId(id: StandardsProofIconId): LucideIcon {
  return standardsProofIconMap[id];
}

export { standardsProofIconForId, standardsProofIconMap };
export type { StandardsProofIconId };
