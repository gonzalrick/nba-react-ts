const storage: any = {};

export function has(key: string): boolean {
  if (key in storage) {
    // Check expiry
    if (storage[key].expiry < Date.now()) {
      delete storage[key];
      return false;
    }

    return true;
  }

  return false;
}

export function get(key: string, def: any = undefined): any {
  return has(key) ? storage[key].value : def;
}

export function put(key: string, value: any, timeout: number = 1): void {
  storage[key] = {
    value,
    expiry: Date.now() + (timeout * 1000),
  }
}