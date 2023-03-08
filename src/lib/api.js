import { getToken } from './auth.js'
import axios from 'axios'
import { baseUrl } from '../config.js'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

//* Fixtures REQ

export function getAllFixtures() {
  return axios.get(`${baseUrl}/fixtures/`)
}

export function getAFixture(fixtureId) {
  return axios.get(`${baseUrl}/fixtures/${fixtureId}/`)
}

export function editTotal(fixtureId, formTotaldata) {
  return axios.put(`${baseUrl}/fixtures/${fixtureId}/`, formTotaldata, headers())
}

export function getAllTeams() {
  return axios.get(`${baseUrl}/clubs/teams/`)
}

export function getAllClubs() {
  return axios.get(`${baseUrl}/clubs/`)
}

export function getAllSeasons() {
  return axios.get(`${baseUrl}/seasons/`)
}

export function getAllLeagues() {
  return axios.get(`${baseUrl}/seasons/leagues/`)
}

//* RESULT REQ

export function createResult(fixtureId, formData) {
  return axios.post(`${baseUrl}/fixtures/${fixtureId}/results/`, formData, headers())
}

// export function deleteResult(fixtureId, e.target.id) {
//   return axios.delete(`/api/fixtures/${fixtureId}/results/${e.target.id}`, headers())
// }

export function getAllResults() {
  return axios.get(`${baseUrl}/fixtures/results/`)
}

//* AUTH REQ

export function userProfile(userId) {
  return axios.get(`${baseUrl}/auth/profile/${userId}`, headers())
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

//* Players REQ

export function getAllPlayers() {
  return axios.get(`${baseUrl}/players/`)
}

export function getAPlayer(playerId) {
  return axios.get(`${baseUrl}/players/${playerId}`)
}

// export function createReview(fixtureId, formData) {
//   return axios.post(`${baseUrl}/fixtures/${fixtureId}/results/`, formData, headers())
// }