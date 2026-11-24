import data from './releases.json';
import { localeInfo, type Locale } from '../../../i18n/config';

export type ReleaseAsset = {
  url: string;
  sha256: string;
  size: number;
  format: string;
  arch: string;
};

export type Release = {
  channel: string;
  version: string;
  pubDate: string;
  published: boolean;
  github: string;
  windows: ReleaseAsset | null;
  macos: ReleaseAsset | null;
  linux: ReleaseAsset | null;
};

export const release = data as Release;

export const primaryDownloadUrl =
  release.published && release.windows ? release.windows.url : release.github;

export function formatSize(bytes: number, locale: Locale): string {
  const value = new Intl.NumberFormat(localeInfo[locale].htmlLang, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }).format(bytes / (1024 * 1024));
  return `${value} MB`;
}

export function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(localeInfo[locale].htmlLang, {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
