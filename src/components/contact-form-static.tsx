"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Phase 2: visual layout only — form does not submit.
 * Phase 3 will wire this to a Resend API route.
 */
export function ContactFormStatic() {
  const t = useTranslations("Form");

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert(t("disabled"));
      }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("name")} <span className="text-[#C14B2D]">*</span>
          </label>
          <Input id="name" name="name" required className="bg-[#FAFAF7]" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("email")} <span className="text-[#C14B2D]">*</span>
          </label>
          <Input id="email" name="email" type="email" required className="bg-[#FAFAF7]" />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
          {t("phone")}
        </label>
        <Input id="phone" name="phone" type="tel" className="bg-[#FAFAF7]" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("projectType")} <span className="text-[#C14B2D]">*</span>
          </label>
          <Select name="projectType">
            <SelectTrigger className="bg-[#FAFAF7]">
              <SelectValue placeholder="Kies..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="keuken">Keukenrenovatie</SelectItem>
              <SelectItem value="badkamer">Badkamerrenovatie</SelectItem>
              <SelectItem value="volledige">Volledige woningrenovatie</SelectItem>
              <SelectItem value="uitbouw">Uitbouw of aanbouw</SelectItem>
              <SelectItem value="anders">Anders</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="projectSize" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("projectSize")}
          </label>
          <Select name="projectSize">
            <SelectTrigger className="bg-[#FAFAF7]">
              <SelectValue placeholder="Kies..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="klein">Klein (&lt; 30 m²)</SelectItem>
              <SelectItem value="middel">Middel (30–100 m²)</SelectItem>
              <SelectItem value="groot">Groot (100 m² +)</SelectItem>
              <SelectItem value="onzeker">Nog niet zeker</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="qualityTier" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("qualityTier")}
          </label>
          <Select name="qualityTier">
            <SelectTrigger className="bg-[#FAFAF7]">
              <SelectValue placeholder="Kies..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="midden">Middenklasse</SelectItem>
              <SelectItem value="hoog">Hoogwaardig</SelectItem>
              <SelectItem value="luxe">Luxe</SelectItem>
              <SelectItem value="onzeker">Nog niet zeker</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
          {t("message")} <span className="text-[#C14B2D]">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Vertel kort wat u in gedachten heeft..."
          className="bg-[#FAFAF7]"
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-[#E8E4DD] accent-[#C14B2D]"
        />
        <label htmlFor="consent" className="text-xs text-[#6B6B6B]">
          {t("privacyConsent")}
        </label>
      </div>

      <div>
        <Button
          type="submit"
          className="w-full bg-[#C14B2D] hover:bg-[#A83A1E] sm:w-auto"
          size="lg"
        >
          {t("submit")}
        </Button>
        <p className="mt-4 text-xs text-[#6B6B6B]/80 italic">{t("disabled")}</p>
      </div>
    </form>
  );
}
