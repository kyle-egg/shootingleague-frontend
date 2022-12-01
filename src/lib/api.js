import { getToken } from './auth.js'
import axios from 'axios'
// import { baseUrl } from '../config.js'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

//* Fixtures REQ

export function getAllFixtures() {
  return axios.get('/api/fixtures')
}

export function getAllTeams() {
  return axios.get('/api/clubs/teams')
}

export function getAllSeasons() {
  return axios.get('/api/seasons')
}

//* RESULT REQ

export function createResult(fixtureId, formData) {
  return axios.post(`/api/fixtures/${fixtureId}/results/`, formData, headers())
}

//* AUTH REQ

export function userProfile(userId) {
  return axios.get(`/api/auth/profile/${userId}`, headers())
}


// export function createReview(fixtureId, formData) {
//   return axios.post(`${baseUrl}/fixtures/${fixtureId}/results/`, formData, headers())
// }