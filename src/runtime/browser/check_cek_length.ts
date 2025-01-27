import { JWEInvalid } from '../../util/errors.js'

const checkCekLength = (cek: Uint8Array, expected: number) => {
  if (cek.length << 3 !== expected) {
    throw new JWEInvalid('Invalid Content Encryption Key length')
  }
}

export default checkCekLength
