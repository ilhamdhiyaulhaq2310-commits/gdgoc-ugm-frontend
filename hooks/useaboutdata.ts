import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { ValueItem, RoleItem } from "@/types";

export function useAboutData() {

  //State untuk Values API (/api/values)
  const [valuesData, setValuesData] = useState<ValueItem[]>([]);
  const [isValuesLoading, setIsValuesLoading] = useState<boolean>(true);
  const [valuesError, setValuesError] = useState<string | null>(null);

  // State untuk Roles API (/api/roles)
  const [rolesData, setRolesData] = useState<RoleItem[]>([]);
  const [isRolesLoading, setIsRolesLoading] = useState<boolean>(true);
  const [rolesError, setRolesError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data Values
    async function loadValues() {
      try {
        setIsValuesLoading(true);
        setIsRolesLoading(true);

        setValuesError(null);
        setRolesError(null);
        const results = await Promise.allSettled([
        fetchApi("values"),
        fetchApi("roles"),
        ]);

        const [values, roles] = results;

        // VALUES
        if (values.status === "fulfilled") {
        setValuesData(values.value);
        setValuesError(null);
        } else {
        setValuesError("Gagal memuat nilai komunitas.");
        }

        // ROLES
        if (roles.status === "fulfilled") {
        setRolesData(roles.value);
        setRolesError(null);
        } else {
        setRolesError("Gagal memuat peran kontribusi.");
        }

      } finally {
        setIsValuesLoading(false);
        setIsRolesLoading(false);
      }
    }

    loadValues();
  }, []);

  return { valuesData, isValuesLoading, valuesError, rolesData, isRolesLoading,
    rolesError
  }
}