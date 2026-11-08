import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { FaqItem, TrackItem, FormatItem, JourneyItem } from "@/types";

export function useHomeData() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  // State untuk data fetching
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [tracksData, setTracksData] = useState<TrackItem[]>([]);
  const [isTracksLoading, setIsTracksLoading] = useState<boolean>(true);
  const [tracksError, setTracksError] = useState<string | null>(null);
  
  const [formatsData, setFormatsData] = useState<FormatItem[]>([]);
  const [isFormatsLoading, setIsFormatsLoading] = useState<boolean>(true);
  const [formatsError, setFormatsError] = useState<string | null>(null);

  const [journeyData, setJourneyData] = useState<JourneyItem[]>([]);
  const [isJourneyLoading, setIsJourneyLoading] = useState<boolean>(true);
  const [journeyError, setJourneyError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setIsTracksLoading(true);
        setIsFormatsLoading(true);
        setIsJourneyLoading(true);

        setError(null);
        setTracksError(null);
        setFormatsError(null);
        setJourneyError(null);
        
        const results = await Promise.allSettled([
        fetchApi("faqs"),
        fetchApi("tracks"),
        fetchApi("formats"),
        fetchApi("journey"),
        ]);

        const [faqs, tracks, formats, journey] = results;

        // FAQ
        if (faqs.status === "fulfilled") {
        setFaqData(faqs.value);
        setError(null);
        } else {
        setError("Gagal memuat pertanyaan FAQ.");
        }

        // TRACKS
        if (tracks.status === "fulfilled") {
        setTracksData(tracks.value);
        setTracksError(null);
        } else {
        setTracksError("Gagal memuat data learning tracks.");
        }

        // FORMATS
        if (formats.status === "fulfilled") {
        setFormatsData(formats.value);
        setFormatsError(null);
        } else {
        setFormatsError("Gagal memuat data format belajar.");
        }

        // JOURNEY
        if (journey.status === "fulfilled") {
        setJourneyData(journey.value);
        setJourneyError(null);
        } else {
        setJourneyError("Gagal memuat data journey.");
        }
 
      } finally {
        setIsLoading(false);
        setIsTracksLoading(false);
        setIsFormatsLoading(false);
        setIsJourneyLoading(false);
      }
    }

    loadData();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return {
    faqData, isLoading, error, openIndex, toggleFaq, tracksData, isTracksLoading, tracksError,
    formatsData, isFormatsLoading, formatsError, journeyData, isJourneyLoading, journeyError,
  };
}