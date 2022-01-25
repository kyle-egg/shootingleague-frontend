import axios from 'axios'

//* Fixtures REQ

export function getAllFixtures() {
  return axios.get(`/api/matches`)
}

//* Fixtures REQ

export function getAllTeams() {
  return axios.get(`/api/teams`)
}