import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Store the value
  async store(storageKey: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await (Storage as any).set({
      key: storageKey,
      value: encryptedValue
    });
  }

  // Get the value
  async get(storageKey: string) {
    const ret = await (Storage as any).get({ key: storageKey });
    return JSON.parse(unescape(atob(ret.value)));
  }

  async removeStorageItem(storageKey: string) {
    await (Storage as any).remove({ key: storageKey });
  }

  // Clear storage
  async clear() {
    await (Storage as any).clear();
  }
}
