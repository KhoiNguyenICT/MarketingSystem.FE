import { SortDirection } from './enums'
import { HttpHeaders, HttpParams } from '@angular/common/http'
import { HttpObserve } from '@angular/common/http/src/client'

export interface IHttpClientRequestOptions {
    body?: any
    headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[]
    }
    observe?: HttpObserve
    params?:
    | HttpParams
    | {
        [param: string]: string | string[]
    }
    reportProgress?: boolean
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'
    withCredentials?: boolean
}

export interface UserData {
    id: string
    fullName: string
    role: string
    userName: string
    email: string
}

export interface SessionData {
    userData: UserData
    access_token: string
}

export interface EntityList<T> {
    count: number
    items: Array<T>
}

export interface QueryParams {
    page: number
    quantity: number
    sortBy: string
    sortDirective: SortDirection
    query: string,
}

export interface UrlTracking {
    name: string
    address: string
}

export interface Domain {
    name: string
    address: string
}

export interface Contact {
    data: string
    utmCampaign: string
    utmAdset: string
    utmAds: string
    utmAgent: string
    utmMedium: string
    utmSource: string
    utmTeam: string
    adsLink: string
}

export interface ContactFilter {
    data: string
    domain: Domain
    utmCampaign: string
    utmAdset: string
    utmAds: string
    utmAgent: string
    utmMedium: string
    utmSource: string
    utmTeam: string
    adsLink: string
}

export interface Account {
    id: string
    email: string
    phoneNumber: number
    fullName: string
    fullNameAcronym: string
    createdDate: Date
    updatedDate: Date
}

export interface ContactData {
    key: string
    value: string
}
