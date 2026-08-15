import BuildingFromAlaskaContent from "./building-from-alaska";
import BuildingProofBeforeOpportunityContent from "./building-proof-before-opportunity";
import CTIResearchLabContent from "./cti-research-lab";
import DigitalSafetyMilitaryFamiliesContent from "./digital-safety-military-families";
import GetToKnowMeContent from "./get-to-know-me";
import LessonsFromTheLabContent from "./lessons-from-the-lab";
import MilitarySpouseCybersecurityContent from "./military-spouse-cybersecurity";
import QualifiedCapableStillWaitingContent from "./qualified-capable-still-waiting";
import PasswordSecurityContent from "./password-security";
import PhishingRedFlagsContent from "./phishing-red-flags";
import PythonSecurityToolsContent from "./python-security-tools";
import SecuringTheInteriorContent from "./securing-the-interior";
import SocialEngineeringEverydayContent from "./social-engineering-everyday";
import BlackCatAlphvContent from "./blackcat-alphv";
import Cl0pContent from "./cl0p";
import LockBitContent from "./lockbit";
import WannaCryContent from "./wannacry";
import RansomwareTicBriefContent from "./ransomware-tic-brief";
import ScatteredSpiderContent from "./scattered-spider";
import APT29Content from "./apt29";
import LazarusGroupContent from "./lazarus-group";
import VoltTyphoonContent from "./volt-typhoon";
import TransitionGapContent from "./the-transition-gap";

export const contentMap: Record<string, React.ComponentType> = {
  "building-from-alaska": BuildingFromAlaskaContent,
  "building-proof-before-opportunity": BuildingProofBeforeOpportunityContent,
  "cti-research-lab": CTIResearchLabContent,
  "digital-safety-military-families": DigitalSafetyMilitaryFamiliesContent,
  "get-to-know-me": GetToKnowMeContent,
  "lessons-from-the-lab": LessonsFromTheLabContent,
  "military-spouse-cybersecurity": MilitarySpouseCybersecurityContent,
  "qualified-capable-still-waiting": QualifiedCapableStillWaitingContent,
  "password-security": PasswordSecurityContent,
  "phishing-red-flags": PhishingRedFlagsContent,
  "python-security-tools": PythonSecurityToolsContent,
  "securing-the-interior": SecuringTheInteriorContent,
  "social-engineering-everyday": SocialEngineeringEverydayContent,
  "blackcat-alphv": BlackCatAlphvContent,
  "cl0p": Cl0pContent,
  "lockbit": LockBitContent,
  "wannacry": WannaCryContent,
  "ransomware-tic-brief": RansomwareTicBriefContent,
  "scattered-spider": ScatteredSpiderContent,
  "apt29": APT29Content,
  "lazarus-group": LazarusGroupContent,
  "volt-typhoon": VoltTyphoonContent,
  "the-transition-gap": TransitionGapContent
};