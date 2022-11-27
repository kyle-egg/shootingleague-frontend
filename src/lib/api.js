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

//* AUTH REQ

export function userProfile(userId) {
  return axios.get(`/api/profile/${userId}`, headers())
}