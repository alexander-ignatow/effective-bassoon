import request from 'supertest'
import { afterEach, describe, expect, it, vi } from 'vitest'

import app from '../index'
import * as quoteGenerator from '../services/quoteGenerator'

describe('quote endpoints', () => {
  afterEach((): void => {
    vi.restoreAllMocks()
  })

  it('returns 401 when GET /quote has no authorization header', async () => {
    const response = await request(app).get('/quote')

    expect(response.status).toBe(401)
  })

  it('returns a quote when GET /quote uses the demo token', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.75)

    const response = await request(app)
      .get('/quote')
      .set('Authorization', 'Bearer demo-token')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      expect.objectContaining({
        text: expect.any(String),
        author: expect.any(String),
        timestamp: expect.any(String),
      }),
    )
  })

  it('returns a generic 500 when quote generation crashes', async () => {
    vi.spyOn(quoteGenerator, 'generateRandomQuote').mockImplementation(() => {
      throw new Error('quote generation failed')
    })

    const response = await request(app)
      .get('/quote')
      .set('Authorization', 'Bearer demo-token')

    expect(response.status).toBe(500)
    expect(response.body).toEqual({ error: 'Internal server error' })
  })

  it('returns an ok status from GET /health', async () => {
    const response = await request(app).get('/health')

    expect(response.body).toEqual({ status: 'ok' })
  })
})