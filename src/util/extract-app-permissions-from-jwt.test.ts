import { describe, expect,it } from "vitest";

import { extractAppPermissionsFromJwt } from "./extract-app-permissions-from-jwt";

/**
 * Contains   
 * "permissions": [
    "MANAGE_ORDERS",
    "HANDLE_TAXES",
    "MANAGE_CHANNELS"
  ],

    https://jwt.io/
 */
const jwtWithPermissions =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE2ODk4NTIyOTEsIm93bmVyIjoic2FsZW9yIiwiaXNzIjoiaHR0cHM6Ly9oYWNrYXRob24tc2hpcHBpbmcuZXUuc2FsZW9yLmNsb3VkL2dyYXBocWwvIiwiZXhwIjoxNjg5OTM4NjkxLCJ0b2tlbiI6IjNHTWRUSVpab3FRSSIsImVtYWlsIjoibHVrYXN6Lm9zdHJvd3NraUBzYWxlb3IuaW8iLCJ0eXBlIjoidGhpcmRwYXJ0eSIsInVzZXJfaWQiOiJWWE5sY2pveU1nPT0iLCJpc19zdGFmZiI6dHJ1ZSwiYXBwIjoiUVhCd09qSXdNalE9IiwicGVybWlzc2lvbnMiOlsiTUFOQUdFX09SREVSUyIsIkhBTkRMRV9UQVhFUyIsIk1BTkFHRV9DSEFOTkVMUyJdLCJ1c2VyX3Blcm1pc3Npb25zIjpbIk1BTkFHRV9VU0VSUyIsIk1BTkFHRV9TRVRUSU5HUyIsIkhBTkRMRV9UQVhFUyIsIk1BTkFHRV9QQUdFUyIsIkhBTkRMRV9DSEVDS09VVFMiLCJNQU5BR0VfTUVOVVMiLCJNQU5BR0VfVFJBTlNMQVRJT05TIiwiTUFOQUdFX1BST0RVQ1RTIiwiTUFOQUdFX1RBWEVTIiwiTUFOQUdFX09CU0VSVkFCSUxJVFkiLCJNQU5BR0VfT1JERVJTX0lNUE9SVCIsIk1BTkFHRV9DSEFOTkVMUyIsIk1BTkFHRV9BUFBTIiwiSU1QRVJTT05BVEVfVVNFUiIsIk1BTkFHRV9QUk9EVUNUX1RZUEVTX0FORF9BVFRSSUJVVEVTIiwiSEFORExFX1BBWU1FTlRTIiwiTUFOQUdFX0NIRUNLT1VUUyIsIk1BTkFHRV9HSUZUX0NBUkQiLCJNQU5BR0VfU0hJUFBJTkciLCJNQU5BR0VfU1RBRkYiLCJNQU5BR0VfRElTQ09VTlRTIiwiTUFOQUdFX1BMVUdJTlMiLCJNQU5BR0VfT1JERVJTIiwiTUFOQUdFX1BBR0VfVFlQRVNfQU5EX0FUVFJJQlVURVMiXX0.zGglCWxuOBgGJKyyZ-6m9Th4_tGUMCMjF6W3UQhaTl5P_tQ2694Pcjwnr2zDzeF0Hl4J-gPWlyH4fLnfHIaJpDds9POtZv1D-bE5kChtkcUC1hfBUzb7iL8SwtQhtvSWy-XmsVDpQTMeD7q5McRSaKNPf3IzPXPJx-F_y5OGpgTukXoweVOufG7jcyrKWyePTqJn1evQTawQOYlzp3nj22uE4sn4UQvpbPgHIbcPohoJSdKigwAPaUqTIz_q8Mrpn4EBUezrs0_24E49kILt4K6Otupbba7rJxQe5664-o7FnSunp-2gtr6zdUaY5hV3bR84WjQZFtgCOgPVd_YT9Q";

describe("extractAppPermissionsFromJwt", () => {
  it("Returns permissions field from JWT token as an array of AppPermission", () => {
    const permissions = extractAppPermissionsFromJwt(jwtWithPermissions);

    expect(permissions).toEqual(["MANAGE_ORDERS", "HANDLE_TAXES", "MANAGE_CHANNELS"]);
  });
});
