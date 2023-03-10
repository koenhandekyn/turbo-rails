import "./cable_stream_source_element"

import Turbo from "@hotwired/turbo"
export { Turbo }

import StreamActions from "@hotwired/turbo"
export { StreamActions }

import * as cable from "./cable"
export { cable }

import { encodeMethodIntoRequestBody } from "./fetch_requests"

addEventListener("turbo:before-fetch-request", encodeMethodIntoRequestBody)
